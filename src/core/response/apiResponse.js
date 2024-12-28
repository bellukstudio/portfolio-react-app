import axiosInstance from "../instance/axiosInstanse";

const apiService = {
  async get(endpoint) {
    const response = await axiosInstance.get("/api" + endpoint);
    return response.data;
  },

  async post(endpoint, payload) {
    const response = await axiosInstance.post("/api" + endpoint, payload);
    return response.data;
  },

  async update(endpoint, payload) {
    const response = await axiosInstance.put("/api" + endpoint, payload);
    return response.data;
  },

  async remove(endpoint) {
    const response = await axiosInstance.delete("/api" + endpoint);
    return response.data;
  },

  async uploadFile(endpoint, file, additionalData) {
    const formData = new FormData();
    formData.append("file", file);

    // Append additional data if provided
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    const response = await axiosInstance.put("/api" + endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};

export default apiService;
