"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Htext from "@/components/htext";
import Chat from "@/components/chat";
import Lchat from "@/components/lchat";
import Tech from "./tech";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SubHero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create responsive animations based on screen size
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    // Function to handle different screen sizes
    const handleScreenSizeChange = () => {
      // Clear any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach(st => st.kill());
      
      if (mediaQuery.matches) {
        // Desktop/tablet version - horizontal scroll animation
        gsap.to(".scrollx", {
          transform: "translate(-150%)",
          scrollTrigger: {
            trigger: ".scrollx",
            scroll: "body",
            // markers: true,
            start: "top 50%",
            end: "top -72%",
            scrub: 1,
            pin: true,
          }
        });
      } else {
        // Mobile version - subtle animation instead of horizontal scroll
        // Optional light animation for mobile that doesn't interfere with scrolling
        gsap.to(".scrollx", {
          opacity: 1,
          scrollTrigger: {
            trigger: ".scrollx",
            scroll: "body",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          }
        });
      }
    };

    // Initial setup
    handleScreenSizeChange();
    
    // Update on window resize
    mediaQuery.addEventListener("change", handleScreenSizeChange);
    
    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  return (
    <>
    <div id="pt" className="h-[50vh] md:h-[100vh] md:mt-15 mt-20">
    <Htext message1="DETECTING MEDICAL" message2="DEEPFAKE" />
    <div className="text-xs md:text-xl text-white m-5 p-11  flex justify-center ">
      <p className="s w-[60vw] text-center font-bold bg-gradient-to-r from-zinc-400  to-zinc-500 bg-clip-text text-transparent">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima est
        vero delectus enim tempora, minus laborum{" "}
        <span>
          adipisicing elit. Mollitia dolores eos labore voluptas autem eius
          excepturi natus quas repellat
        </span>
      </p>
    </div>
    <div className="flex justify-center items-center">
      <Link
        href="/test"
        className="s w-xs md:w-3xs text-center p-3 h-12 bg-teal-950 text-white  rounded-2xl m-2 border-b shadow-lg shadow-zinc-750 border-neutral-500"
      >
        TRY NOW
      </Link>
      <button className="s w-xs md:w-3xs h-12 bg-teal-800 text-white  rounded-2xl m-2 border-b shadow-lg shadow-zinc-750 border-neutral-500">
        GITHUB
      </button>
      a
    </div>
  </div>

        <Htext message1="TECHNOLOGIES USE IN" message2="PROJECT" />
        
      
          
          {/* For desktop - horizontal scroll */}
          <div className="scrollx  md:flex md:gap-40 md:justify-start hi ">
            <Tech subtitle="technologies" desc="GENERATIVE ADVERSIAL NETWORK" />
        
            <Tech subtitle="technologies" desc="WHAT GENERATOR" />
            <Tech subtitle="referances" desc="THE REFERANCE " />
            <Tech subtitle="technologies" desc="WHAT IS DESCRIMINATOR" />
           
            <Tech subtitle="technologies" desc=" ADVERSIAL TRAINING" />

          </div>
     
      
    </>
  );
};

export default SubHero;