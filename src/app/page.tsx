"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplashScreen from "@/app/components/splashscreen";
import Welcome from "@/app/components/welcome";
import WorkExperience from "@/app/components/workexperience";
import Skills from "@/app/components/skills";
import Education from "@/app/components/education";
import Contact from "@/app/components/contact";
import ParticlesBackground from "@/app/components/particlesbackground";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, [showContent]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ParticlesBackground />
      {!showContent && <SplashScreen onComplete={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Welcome />
          <WorkExperience />
          <Skills />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
}

