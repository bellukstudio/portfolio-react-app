# Base image
FROM --platform=$BUILDPLATFORM node:22-alpine AS base

# Dependencies stage
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Builder stage
FROM base AS builder
WORKDIR /app

# Set environment variable here so it exists during build
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV SKIP_ENV_VALIDATION=true

RUN npm run build

# Production runner stage
FROM base AS runner
WORKDIR /app

# Set environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Pass env again in runner for runtime
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Add non-root user
RUN addgroup nodejs && adduser -SDH nextjs
USER nextjs

# Copy required files for production
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/ ./.next/
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
