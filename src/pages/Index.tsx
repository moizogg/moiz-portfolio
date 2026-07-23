import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** New Field Notes portfolio page (replaces cyber green layout). */
const Portfolio = () => (
  <div className="min-h-screen bg-paper text-ink" data-page="portfolio-field-notes">
    <Navigation />
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
