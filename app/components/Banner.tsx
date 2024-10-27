"use client"

import React from "react";
import { ReactTyped } from "react-typed";


const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn with Us</div>

        <h2 className="text-white text-3xl md:text-[60px] md:p-[24px]">Grow With Us.</h2>

        <div className="text-[20px] md:text-[50px] md:p-[24px] text-white">
            Learn 
            <ReactTyped
            className="pl-3" 
            strings={["Web Developement", "Digital Marketing", "Ethical Hacking"]} 
            typeSpeed={100}
            loop={true}
            backSpeed={50} />
            </div>
    
    <button className='bg-black text-white p-3 rounded'>Get Started</button>
        
      </div>
    </div>
  );
}
export default Banner;