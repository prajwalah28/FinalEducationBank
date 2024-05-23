import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import React from "react";
import { RatingData } from "./RatingData";

const Ratings = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div className="flex px-20 gap-2 w-full sm:flex-col lg:flex-row ">
      {RatingData.map((item, index) => (
        <div key={index} className=" p-4 mb-4 border border-gray-400 rounded-lg">
          <div className="flex items-center gap-2">
            {" "}
            <div className="rounded-full  bg-orange-500 w-12 h-12 flex items-center  justify-center">
              <p className="font-semibold text-white">SB</p>
            </div>
            <div>
              <h2 className="font-bold">{item.name}</h2>

              <div className="flex">
                {" "}
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>{" "}
                <p>{item.dayago}</p>
              </div>
            </div>
          </div>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
