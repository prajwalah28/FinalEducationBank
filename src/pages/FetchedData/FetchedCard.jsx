import React, { useContext } from "react";
import { UserContext } from "../../Context/LoginContext";
import Card from "./Card";

const FetchedCard = ({ allFetched, selectedFilter }) => {
  const { searchText } = useContext(UserContext);

  const filteredData = allFetched.filter((item) => {
    const filterBySelected =
      selectedFilter === "all" ||
      item.courseTitle.toLowerCase().includes(selectedFilter.toLowerCase());
    const filterBySearch = item.courseTitle
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return filterBySelected && filterBySearch;
  });

  return (
    <div
      className={
        filteredData.length !== 0
          ? "grid lg:grid-cols-4 justify-items-center  mb-80 px-40 mt-40 z-50 md:grid-cols-3 sm:grid-cols-2 lg:gap-5 md:gap-5 sm:gap-5  "
          : ""
      }
    >
      {filteredData.length === 0 ? (
        <>
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-10 py-10 rounded w-80 mx-auto mb-20 mt-40 "
            role="alert"
          >
            <p class="font-bold">
              The course is not available now. Please check back later.
            </p>
          </div>
        </>
      ) : (
        <>
          {filteredData.map((all_items) => {
            return <Card key={all_items.id} all_items={all_items} />;
          })}
        </>
      )}
    </div>
  );
};

export default FetchedCard;
