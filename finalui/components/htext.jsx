'use client'
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const htext = ({message1,message2}) => {
const testRef = useRef(null)


useGSAP(()=>{
  gsap.to(".s",{
    opacity:1,
    duration:1,
    ease:1,
    stagger:1
  })
})

  return (
    <div ref={testRef} className="s mt-10 font-mono font-extrabold text-center  md:mt-5">
      <h1   className="  text-xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-teal-500 to-blue-900 bg-clip-text text-transparent">
        {message1} <br />
        <span className="text-2xl md:text-6xl">{message2}</span>
      </h1>
    </div>
  );
};

export default htext;
