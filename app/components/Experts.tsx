import React from "react";
import Laptop from "../assets/laptop.jpg";

const Experts = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] p-2 mx-auto my-10  border-black md:grid grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop.src} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</p>
          <p className="my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            facere doloribus tempora quisquam! Recusandae ipsa suscipit
            perspiciatis hic nulla doler that pro gram and the lead
          </p>
          <button className="w-[30%] bg-black text-white p-3 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Experts;
