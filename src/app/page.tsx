"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import linkedinLogo from "@/images/LinkedIn_logo.svg";
import googleLogo from "@/images/email.webp";
import SplashScreen from "@/app/splashscreen"; // Ensure the import path is correct
import Welcome from "@/app/welcome";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      // Animate sections to slide in from the sides
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const bgColor = sectionElement.dataset.bgcolor;
        const textColor = sectionElement.dataset.textcolor;

        gsap.fromTo(
          sectionElement,
          { opacity: 0, x: 100 }, // Initial state: hidden and 100px to the right
          {
            opacity: 1,
            x: 0, // Final state: visible and in original position
            backgroundColor: bgColor,
            color: textColor,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionElement,
              start: "top 80%", // Trigger animation when the top of the section is 80% from the top of the viewport
              end: "top 60%",   // End animation when the top of the section is 60% from the top of the viewport
              scrub: true,      // Smooth scrolling effect
            },
          }
        );
      });

      // Additional animations
      gsap.fromTo(
        ".portfolio-section",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".portfolio-section",
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".image-container",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );

      // Animate introduction text
      gsap.fromTo(
        ".intro-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [showContent]);

  return (
    <div className="overflow-x-hidden">
      {/* Splash Screen */}
      {!showContent && <SplashScreen onComplete={() => setShowContent(true)} />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Hero Section */}
          <section className="hero min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <Welcome />
          </section>

          {/* Work Experience Section */}
          <section
            className="section work-experience min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 md:px-10 bg-[#1a1a1a] text-[#f8f8f8]"
            data-bgcolor="#1a1a1a"
            data-textcolor="#f8f8f8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Work Experience</h2>
            <div className="work-detail mt-4 sm:mt-6 md:mt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Software Engineer Intern</h3>
              <p className="text-base sm:text-lg md:text-xl font-medium">Punch Group · Full-time</p>
              <p className="text-base sm:text-lg md:text-xl">May 2024 - Present</p>
              <p className="text-base sm:text-lg md:text-xl">Lahore, Punjab, Pakistan · On-site</p>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6 md:mt-8">Quality Assurance</h3>
              <p className="text-base sm:text-lg md:text-xl font-medium">Punch Group · Full-time</p>
              <p className="text-base sm:text-lg md:text-xl">July 2024 - Present</p>
              <p className="text-base sm:text-lg md:text-xl">Lahore, Punjab, Pakistan · On-site</p>
            </div>
          </section>

          {/* Skills Section */}
          <section
            className="section skills min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 bg-[#3c3c3c] text-[#d3d3d3]"
            data-bgcolor="#3c3c3c"
            data-textcolor="#d3d3d3"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-8">Skills</h2>
            <div className="skills-list text-center">
              <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg">
                {/* Skill Items */}
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">C</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">C++</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">C#</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">Python</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">JavaScript</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">TypeScript</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">HTML</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">CSS</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">Tailwind</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">Material-UI</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">React</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">Next.js</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">Node.js</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">SQL</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">MongoDB</li>
                <li className="group p-2 sm:p-3 md:p-4 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white">GraphQL</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section
            className="section education min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 bg-[#2b2b2b] text-[#e2e2e2]"
            data-bgcolor="#2b2b2b"
            data-textcolor="#e2e2e2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Education</h2>
            <div className="education-list text-center">
              <div className="education-item mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Lahore Garrison University</h3>
                <p className="text-base sm:text-lg md:text-xl font-medium">Bachelor of Science, Computational Science</p>
                <p className="text-base sm:text-lg md:text-xl">Feb 2021 - Feb 2025</p>
                <p className="text-base sm:text-lg md:text-xl mt-2">Successfully completed courses in mathematics, Computing, and Statistics. Trained an AI model.</p>
              </div>
              <div className="education-item mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Defence Degree College</h3>
                <p className="text-base sm:text-lg md:text-xl font-medium">Intermediate, Computational Science</p>
                <p className="text-base sm:text-lg md:text-xl">Feb 2019 - Jun 2020</p>
                <p className="text-base sm:text-lg md:text-xl mt-2">Designed a project management & learning environment for a class of 40 students. Learned programming fundamentals using languages such as Python and C++. Gained understanding of basic algorithms and data structures including arrays, linked lists, and sorting algorithms.</p>
              </div>
              <div className="education-item mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Fauji Foundation</h3>
                <p className="text-base sm:text-lg md:text-xl font-medium">High School Diploma, Computational Science</p>
                <p className="text-base sm:text-lg md:text-xl">2017 - 2018</p>
                <p className="text-base sm:text-lg md:text-xl mt-2">Developed problem-solving skills through computational problems and logical exercises.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            className="section contact min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 bg-[#4d4d4d] text-[#c4c4c4]"
            data-bgcolor="#4d4d4d"
            data-textcolor="#c4c4c4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Contact</h2>
            <div className="contact-info flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/ammar-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Image
                  src={linkedinLogo}
                  alt="LinkedIn Logo"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <span className="text-base sm:text-lg md:text-xl">LinkedIn</span>
              </a>
              <a
                href="mailto:example@gmail.com"
                className="flex items-center space-x-2"
              >
                <Image
                  src={googleLogo}
                  alt="Gmail Logo"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <span className="text-base sm:text-lg md:text-xl">Gmail</span>
              </a>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
