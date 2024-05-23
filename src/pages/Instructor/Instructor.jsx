import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import { RiArrowDropDownLine } from "react-icons/ri";

const Instructor = () => {
  return (
    <div className="px-6 sm:px-12 md:px-24 mb-8">
      <div className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-left mb-2">
        Instructor
      </div>
      <div className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500 mb-4">
        Jay Kashikar
      </div>
      <div className="border-b-2 w-32 sm:w-36 md:w-44 border-solid border-black -mt-2 mb-4"></div>
      <div className="text-gray-500 mb-6">
        Head of Data Science at NgpIT Training
      </div>
      <div className="flex items-center gap-4 sm:gap-8 md:gap-10 mb-6">
        <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-orange-500"></div>
        <div className="font-inter text-sm sm:text-base md:text-lg text-blue-900">
          <p>4.6 Instructor Rating</p>
          <p>115,589 Reviews</p>
          <p>325,899 Students</p>
          <p>10 Courses</p>
        </div>
      </div>
      <div className="text-gray-700 mb-4">
        <p>
          Jay Kashikar has a BS and MS in Mechanical Engineering from MIT
          University and years of experience as a professional instructor and
          trainer for Data Science, Machine Learning, and Python Programming. He
          has publications and patents...
        </p>
        <div className="flex text-orange-500 items-center cursor-pointer mt-2">
          <p className="text-lg">See more</p>
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
      <div className="flex flex-row gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-row text-lg sm:text-xl md:text-2xl gap-2 sm:gap-3 md:gap-4 font-bold items-center">
          <StarIcon className="text-orange-500" />
          <h1>4.6 Course Rating</h1>
        </div>
        <div className="flex flex-row text-lg sm:text-xl md:text-2xl gap-2 sm:gap-3 md:gap-4 font-bold items-center">
          <CircleIcon className="text-orange-500" />
          <h1>502K Ratings</h1>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
