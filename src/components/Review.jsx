import React from "react";
import { Link } from "react-scroll";
import { Icons } from "../assets/assets";

import ashish from "../assets/images/ashish-scaled-1.jpg";

const Review = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center bg-gray-100" id="review">
        <div>
          <img src={ashish} className="py-6 pr-10 w-[581px] h-[451px]" />
        </div>
        <div className="flex flex-col">
          <div className="mt-12">
            <p className="text-3xl font-medium">
              <p></p>Mr. Ashish Kumar Patel has 18+ Years of expertise<br></br>{" "}
              in teaching and mentoring more than 250+ Students <br></br>to make
              an expert in their career. He has worked with<br></br> big giants
              like Microsoft, Samsung, Intel, Blackberry, etc<br></br> in his
              career span.<br></br>
              He was the core team member in more than 5 companies.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Mr. Ashish Kumar Patel</h2>

            <h2 className="mt-2 text-orange-400 cursor-pointer font-medium">
              Data Science & IT Certifications
            </h2>
          </div>
        </div>
        <div className="mt-52 ml-12">
          <Link to="overview" smooth={true} duration={500}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Icons.MdNavigateNext className="rounded" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Review;
