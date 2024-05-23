import React from "react";

const Bar = () => {
  const Data = [
    {
      num: "62M",
      title: "Students",
    },
    {
      num: "75M+",
      title: "Languages",
    },
    {
      num: "830M",
      title: "Enrollments",
    },
    {
      num: "180M+",
      title: "Countries",
    },
    {
      num: "15,000+",
      title: "Enterprise customers",
    },
  ];

  return (
    <div className="bg-blue-950 flex justify-around mb-10 py-6 px-10">
      {Data.map((items, index, arr) => {
        return (
          <div className="flex flex-col   p-2 text-center" key={index}>
            <h1 className="text-orange-600 font-bold text-2xl">{items.num}</h1>
            <h1 className="text-white text-xl font-bold ">{items.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Bar;
