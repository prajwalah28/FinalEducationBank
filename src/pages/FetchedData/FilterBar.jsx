import React, { useState } from "react";

const FilterBar = ({ handleFilterSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    handleFilterSelect(filter);
  };
  return (
    <div
      className=" fixed bg-white w-full  -mt-12"
    >
      <ul className=" grid grid-cols-4 justify-items-center gap-5 px-40 py-8">
        <li
          className=" text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("all")}
        >
          All
        </li>
        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("Python")}
        >
          Development
        </li>
        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("JavaScript")}
        >
          Business
        </li>
        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("Software")}
        >
          IT & Software
        </li>
        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("Teaching")}
        >
          Teaching
        </li>
        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("Marketing")}
        >
          Marketing
        </li>

        <li
          className="text-center w-60 cursor-pointer bg-orange-400 mb-2 px-10 py-2 rounded-md text-white font-bold"
          onClick={() => handleFilterClick("Design")}
        >
          Design
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
