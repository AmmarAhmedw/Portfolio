"use client";
import { useEffect } from "react";
import gsap from "gsap";
import "@fontsource/lato/400.css"; // Regular weight
import "@fontsource/lato/100.css"; // Thin weight

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    // Define the paths for "A" and the rounded border
    const aPath = "M 30 70 L 40 30  L 50 50 L 60 70 "; 
    const borderPath = "M 50 50 Q 15 50, 30 70 Q 25 80, 60 60 Q 75 50, 60 30 Q 55 20";

    // Get the path elements
    const aElement = document.querySelector(".splash-svg .a-path") as SVGPathElement;
    const borderElement = document.querySelector(".splash-svg .border-path") as SVGPathElement;

    if (aElement && borderElement) {
      // Set initial path
      aElement.setAttribute("d", aPath);
      borderElement.setAttribute("d", borderPath);

      // Define path lengths
      const aLength = aElement.getTotalLength();
      const borderLength = borderElement.getTotalLength();

      // Initial path styles
      aElement.style.strokeDasharray = aLength.toString();
      aElement.style.strokeDashoffset = aLength.toString();
      borderElement.style.strokeDasharray = borderLength.toString();
      borderElement.style.strokeDashoffset = borderLength.toString();

      // Animate drawing of "A"
      gsap.to(aElement.style, {
        strokeDashoffset: 0,
        duration: 1, // Reduced duration for faster animation
        ease: "power2.out"
      });

      // Animate drawing of rounded border
      gsap.fromTo(
        borderElement.style,
        { strokeDashoffset: borderLength.toString() },
        {
          strokeDashoffset: 0,
          duration: 1, // Reduced duration for faster animation
          ease: "power2.inOut",
          delay: 1, // Adjusted delay to match new duration
          onComplete: () => {
            setTimeout(() => {
              gsap.to(".splash-screen", {
                opacity: 0,
                duration: 0.5, // Reduced duration for fade-out
                onComplete: onComplete
              });
            }, 1000); // Adjusted timeout to match new delay
          }
        }
      );
    }
  }, [onComplete]);

  return (
    <div className="splash-screen fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50">
      <h1 className="splash-text text-[8vw] flex justify-center text-center align-center font-thin font-lato mb-[2vw] mr-[1vw]">Ammar Ahmed</h1>
      <svg
        className="splash-svg"
        width="200"
        height="200"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Path elements */} 
        <path className="a-path" d="" />
        <path className="border-path" d="" />
      </svg>
    </div>
  );
}
