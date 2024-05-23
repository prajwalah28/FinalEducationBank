import React from 'react';
import { RatingData } from '../Ratings/RatingData';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";


const Ratings = () => {
    const [value, setValue] = React.useState(5);
  return (
    <div className='grid grid-cols-2 px-2 gap-2 mt-6'>
      {RatingData.map((item, index) => (
        <div key={index} className="border p-4 mb-4">
        <div className='flex items-center gap-2'>  <div className="rounded-full  bg-orange-500 w-12 h-12 flex items-center  justify-center"><p className='font-semibold text-white'>SB</p></div>
        <div><h2 className="font-bold">{item.name}</h2>

        <div className="flex">  <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    
    </Box> <p>{item.dayago}</p></div>
          </div>
          </div>
      
          
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
