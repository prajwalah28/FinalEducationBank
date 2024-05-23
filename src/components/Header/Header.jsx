import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext";
import { Icons } from "../../assets/assets";
import Logout from "../../pages/Logout/Logout";

const Header = () => {
  const [profile, setProfile] = useState(false);

  const {
    setdatahide,
    allFetched,
    userDetails,
    isLoggedIn,
    UserAccountData,
    setSearchText,
  } = useContext(UserContext);

  const [allCourses, setAllCourse] = useState(allFetched);

  const handleSearch = (e) => {
    let trgt_val = e.target.value;
    setSearchText(trgt_val);
  };

  const handleLogout = () => {
    setProfile(false);
    setdatahide(true);
  };

  return (
    <div className="mb-28 z-10">
      <div className="flex justify-between px-10 bg-gray-100 py-6 items-center font-bold shadow-xl shadow-bottom fixed top-0 w-full z-50 ">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="flex cursor-pointer">
              <img src={Icons.logo} alt="" className="w-30 h-12" />
            </div>
          </Link>

          <Link to="/courses">
            <h1 className="text-lg">Categories</h1>
          </Link>
          <div className="hidden md:flex items-center border border-gray-800 rounded-3xl px-2 gap-3 bg-slate-300">
            <Icons.FaSearch />
            <input
              type="text"
              placeholder="search your course"
              className="rounded-r-xl px-3 h-12 outline-none  bg-slate-300"
              onChange={handleSearch}
            />
          </div>
          <Link to="/home">
            <h1 className="text-lg cursor-pointer">Teach on NgpIT</h1>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/cart">
            <div className="relative mr-3">
              <Icons.FiShoppingCart className="text-3xl" />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-2 rounded-full border-1 border-black">
                {/* {isLoggedIn ? userDetails.cart.length : 0} */}
              </span>
            </div>
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="border border-black px-5 py-2 rounded-sm">
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button className="border border-black px-5 py-2 rounded-sm bg-blue-950 text-white">
                  Sign in
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                <div className="flex gap-4">
                  <Icons.FaRegHeart className="text-3xl " />
                  <Icons.BiBell className="text-3xl " />
                </div>
                <div
                  className=" text-white cursor-pointer"
                  onClick={() => {
                    setProfile(!profile);
                  }}
                >
                  {UserAccountData.image ? (
                    <img
                      src={UserAccountData.image}
                      alt=""
                      className="h-12 w-12 rounded-full border-2 border-gray-400"
                    />
                  ) : (
                    <h1 className="bg-blue-950 rounded-full text-white font-semibold cursor-pointer h-5 w-5 ">
                      {userDetails.name &&
                        userDetails.name
                          .split(" ")
                          .map((name) => name[0].toUpperCase())
                          .join("")}
                    </h1>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="">
        {profile ? (
          <>
            <Logout handleLogout={handleLogout} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
