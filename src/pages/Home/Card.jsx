import React from "react";
// import { Icons } from "../assets/assets";

const Card = ({ img, title, desc }) => {
  return (
    <div className="w-80 flex flex-col items-center m-10 p-4">
      <img src={img} alt="" />
      <h1 className="font-bold text-xl mb-4 text-center mt-3">{title}</h1>
      <p className=" text-center tracking-wider font-semibold leading-6 ">{desc}</p>
    </div>
  );
};

export default Card;
