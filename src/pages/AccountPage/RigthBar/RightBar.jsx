import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../../Context/LoginContext";
import { FaUser } from "react-icons/fa";

const RightBar = () => {
  const location = useLocation();
  const { UserAccountData } = useContext(UserContext);

  // console.log(location);
  return (
    <div
      className="w-[300px] border border-orange-600 border-r-0 flex flex-col items-center justify-around"
      style={{ height: "600px" }}
    >
      <div className="flex flex-col items-center">
        <div>
          {UserAccountData?.image ? (
            <img
              src={UserAccountData.image}
              alt="User profile"
              className="w-20 h-20 rounded-full border-2 border-gray-400"
            />
          ) : (
            <div className="rounded-full border-2 px-4 py-4 ">
              <FaUser className=" text-gray-400 text-7xl" />
            </div>
          )}
        </div>
        <h1 className="text-xl font-bold mt-5">
          {UserAccountData?.firstName || UserAccountData?.lastName
            ? `${UserAccountData.firstName} ${UserAccountData.lastName}`
            : "Guest"}
        </h1>
      </div>
      <div className="flex flex-col gap-1 items-start text-md">
        <NavLink to="/account/form">
          <a href="" className="px-2">
            View profile
          </a>
        </NavLink>
        <NavLink to="/account/form" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Profile
          </a>
        </NavLink>
        <NavLink to="/account/photo" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Photo
          </a>
        </NavLink>
        <NavLink to="/account/security" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Account Security
          </a>
        </NavLink>
        <NavLink to="/account/privacy" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Privacy
          </a>
        </NavLink>
        <NavLink to="/account/payment" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Payment Method
          </a>
        </NavLink>
        <NavLink to="/account/notification" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Notification
          </a>
        </NavLink>
        <NavLink to="/account/delete" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Close account
          </a>
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;

  return (
    <Link
      to={to}
      className={` ${isActive ? "bg-gray-200  py-1 rounded-md " : ""}`}
    >
      {children}
    </Link>
  );
};

export default RightBar;
