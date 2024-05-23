import React from "react";
import { Icons } from "../assets/assets";

const SupportTeam = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-4">
        <div>
          <img src={Icons.png1} className="  w-96" />
        </div>
        <div className="-mt-8">
          <div className="text-3xl text-center mt-8 font-bold">
            You won't have to do it alone
          </div>
          <div className="tracking-wider">
            <p className="text-center mt-4 text-2xl ">
              Our{" "}
              <span className="text-orange-400 cursor-pointer font-medium">
                Instructor Support Team
              </span>{" "}
              is here to answer your questions and review your test video,
              <br /> while our{" "}
              <span className="text-orange-400 cursor-pointer font-medium">
                Teaching Center
              </span>{" "}
              gives you plenty of resources to help you through the process.
              <br /> Plus, get the support of experienced instructors in our{" "}
              <span className="text-orange-400 cursor-pointer font-medium">
                online
              </span>
              <br />{" "}
              <span className="text-orange-400 cursor-pointer font-medium">
                community.
              </span>
            </p>
          </div>

          <div>
            <p className="text-center text-blue-500 cursor-pointer underline hover:text-orange-400 mt-4">
              <a href="">Need more details before you start? Learn more.</a>
            </p>
          </div>
        </div>
        <div>
          <img src={Icons.png2} className="w-96" />
        </div>
      </div>

      <div className="bg-gray-100 py-6 mb-8 ">
        <div>
          <h1 className="text-2xl text-center mt-6 text-orange-400 font-bold">
            Become an instructor today
          </h1>
        </div>

        <div>
          <h1 className="text-2xl text-center mt-2 font-bold">
            Join one of the best online learning <br /> platform
          </h1>
        </div>
        <div className="text-center mt-4 mb-6">
          <button className="py-3 px-24 border-2 border-orange-400 bg-transparent text-black hover:bg-orange-400 hover:text-white font-bold ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default SupportTeam;
