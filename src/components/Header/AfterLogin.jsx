import React from "react";
import { Icons } from "../../assets/assets";
// import { Link } from "react-router-dom";

const AfterLogin = () => {
  return (
    <div className="mb-24">
      <div className="flex justify-between px-10 bg-gray-100 py-6 items-center font-bold shadow-xl shadow-bottom fixed  top-0 w-full ">
        <div className="flex items-center gap-4">
          <div className="flex cursor-pointer">
            <img src={Icons.logo} alt="" className="w-30 h-12" />
          </div>

          <h1>Categories</h1>
          <div className="flex items-center border border-gray-800 rounded-3xl px-2 gap-3 bg-slate-300">
            <Icons.FaSearch />
            <input
              type="text"
              placeholder="search your course"
              className="rounded-r-xl px-3 h-8 outline-none bg-slate-300"
            />
          </div>
          <h1>Teach on NgpIT</h1>
          <h1>My Learning</h1>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-4">
            <Icons.FiShoppingCart className="text-3xl" />
            <Icons.FaRegHeart className="text-3xl " />
            <Icons.BiBell className="text-3xl " />
          </div>
          <div className="bg-blue-950 px-4 py-3 rounded-full text-white">
            <h1>RJ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
