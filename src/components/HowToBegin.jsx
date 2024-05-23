import React from "react";
import { Icons } from "../assets/assets";

const HowToBegin = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-center text-4xl mt-8 font-bold">How To Begin</h1>
      <div className="flex flex-row items-center justify-center mt-8 gap-16 text-2xl font-medium cursor-pointer">
        <a href="#">Plan your curriculum</a>
        <a href="#">Record your Video</a>
        <a href="#">Launch your Course</a>
      </div>
      <div className="h-0.5 bg-gray-400 mx-auto mt-2 w-4/6"></div>
      <div className="flex flex-row justify-center gap-16 mt-16">
        <div className="flex flex-col gap-4 text-2xl">
          <p>
            You start with your passion and knowledge.
            <br />
            Then choose a promising topic with the help
            <br />
            of our Marketplace Insights tool.
          </p>
          <h2 className="font-bold">How we help you</h2>
          <p>
            We offer plenty of resources on how to create
            <br />
            your first course. And, our instructor dashboard
            <br />
            and curriculum pages help keep you organized.
          </p>
        </div>
        <div>
          <img src={Icons.curr} alt="Curriculum" />
        </div>
      </div>
    </div>
  );
};

export default HowToBegin;
