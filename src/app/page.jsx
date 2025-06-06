"use client";
import HomeSection from "@/components/Home/HomeSection";
import ProfileSection from "@/components/Profile/ProfileSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import SkillSection from "@/components/Skill/SkillSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import ContactSection from "@/components/Contact/ContactSection";
export default function Home() {
  return (
    <div className="md:container mx-auto">
      <Navbar />
      <section id="home" className="sm:h-[100vh] md:h-[50vh]">
        <HomeSection />
      </section>
      <section id="profile" className="m:h-[100vh] md:h-[50vh]">
        <ProfileSection />
      </section>
      <section id="experience" className="mt-[100px]">
        <ExperienceSection />
      </section>

      <section id="skills" className="mx-auto">
        <SkillSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <BottomNavbar />
    </div>
  );
}
// t