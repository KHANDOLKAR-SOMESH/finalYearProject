"use client"
import React from "react";
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
    
    gsap.to(".scrollx", {
      transform:"translate(-150%)",
      scrollTrigger: {
        trigger: ".scrollx",
        scroll: "body",
        markers: true,
        start: "top 50%",
        end: "top -75%",
        scrub: 1,
        pin: true,
      }
    });
  });
  
  
  return (
    <>
      <div id="pt" className=" h-[100vh] mt-15">
        <Htext message1="DETECTING MEDICAL" message2="DEEPFAKE" />
        <div className="text-xl text-white m-5 p-11  flex justify-center ">
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
            className="s w-3xs text-center p-3 h-12 bg-teal-950 text-white  rounded-2xl m-2 border-b shadow-lg shadow-zinc-750 border-neutral-500"
          >
            TRY NOW
          </Link>
          <button className="s w-3xs h-12 bg-teal-800 text-white  rounded-2xl m-2 border-b shadow-lg shadow-zinc-750 border-neutral-500">
            GITHUB
          </button>
          a
        </div>
      </div>

      <Htext message1="TECHNOLOGIES USE IN" message2="PROJECT" />
      <div className="scrollx flex gap-40 justify-center mt-8 ">
        <Tech subtitle="technologies" desc="GENERATIVE ADVERSIAL NETWORK" />
        <Tech subtitle="referances" desc="THE REFERANCE " />
        <Tech subtitle="technologies" desc="WHAT GENERATOR" />
        <Tech subtitle="referances" desc="THE REFERANCE " />
        <Tech subtitle="technologies" desc="WHAT IS DESCRIMINATOR" />
        <Tech subtitle="referances" desc="THE REFERANCE " />
        <Tech subtitle="technologies" desc=" ADVERSIAL TRAINING" />
        <Tech subtitle="referances" desc="THE REFERANCE " />
      </div>
    </>
  );
};

export default SubHero;
