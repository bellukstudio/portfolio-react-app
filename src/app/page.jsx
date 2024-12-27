"use client"
import HomeSection from "@/components/Home/HomeSection";
import ProfileSection from "@/components/Profile/ProfileSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import SkillSection from "@/components/Skill/SkillSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="md:container mx-auto">
      <Navbar />
      <section id="home" className="h-[50vh]">
        <HomeSection />
      </section>
      <section id="profile" className="h-[70vh]">
        <ProfileSection />
      </section>
      <section id="experience" className="mx-auto">
        <ExperienceSection />
      </section>
      <section id="skills" className="mx-auto">
        <SkillSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <Footer/>
    </div>
  );
}
