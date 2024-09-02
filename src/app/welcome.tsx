"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";

function Welcome() {
  const welcomes = [
    "Welcome",
    "Bienvenido",
    "환영합니다",
    "Willkommen",
    "Benvenuto",
    "欢迎 ",
    "ようこそ ",
    "Chào mừng",
    "Добро пожаловать ",
    "स्वागत",
    "أهلا وسهلا ",
    "Welkom",
    "स्वागत है ",
    "Välkommen",
    "Tervetuloa",
    "Witaj",
    "ברוך הבא ",
    "স্বাগতম ",
    "Բարի գալուստ ",
    "Dobrodošli",
    "Tervetuloa",
  ];

  const [currentWelcome, setCurrentWelcome] = useState(welcomes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate the current welcome message out
      gsap.to(".welcome-text", {
        opacity: 0,
        x: -100, // Slide to the left
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Update the message
          setCurrentWelcome((prev) => {
            const currentIndex = welcomes.indexOf(prev);
            const nextIndex = (currentIndex + 1) % welcomes.length;
            return welcomes[nextIndex];
          });

          // Animate the new welcome message in
          gsap.fromTo(".welcome-text",
            {
              opacity: 0,
              x: 100, // Start from the right
            },
            {
              opacity: 1,
              x: 0, // Move to the center
              duration: 0.5,
              ease: "power2.inOut"
            }
          );
        },
      });
    }, 2000); // Increase interval time to match animation duration

    return () => clearInterval(interval);
  }, [welcomes]);

  return (
    <div>
      <h1 className="text-5xl display-flex text-center align-center mb-4 font-bold welcome-text">{currentWelcome}</h1>
      <p className="intro-text text-xl mt-[1.5vw] display-flext text-center align-center text-3xl ">Hi, I’m Ammar Ahmed, a passionate software engineer with a love for problem-solving and innovation.</p>
    </div>
  );
}

export default Welcome;
