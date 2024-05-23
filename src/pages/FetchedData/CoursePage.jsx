import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/LoginContext";
import FetchedCard from "./FetchedCard";
import FilterBar from "./FilterBar";
const CoursePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const {Courses } = useContext(UserContext);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="flex flex-col justify-between w-full">
      <div className="mx-auto mt-8 flex justify-center w-full">
        <FilterBar handleFilterSelect={handleFilterSelect} />
      </div>
      <div className="">
        <FetchedCard allFetched={Courses} selectedFilter={selectedFilter} />
      </div>{" "}
    </div>
  );
};

export default CoursePage;
