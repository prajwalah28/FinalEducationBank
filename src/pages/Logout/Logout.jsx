import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext";
import { toast } from "react-toastify";

const Logout = () => {
  const {
    setIsLoggedIn,
    setUserDetails,
    userDetails,
    PaymentSucess,
    UserAccountData,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setIsLoggedIn(false);
    setUserDetails(null);
    toast.success("Logout successful");

    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 50);
  };

  return (
    <div className="flex flex-col border border-gray-300 w-80 shadow-2xl fixed right-4 top-20 bg-white rounded-md z-50">
      <Link to="/account">
        <div className="flex items-center px-4 py-3 gap-2">
          <div className=" rounded-full text-white font-bold cursor-pointer  mr-2">
            {UserAccountData.image ? (
              <img
                src={UserAccountData.image}
                alt=""
                className="h-12 w-12 rounded-full border-2 border-gray-400"
              />
            ) : (
              <h1 className="bg-blue-950 rounded-full text-white font-semibold cursor-pointer px-3 py-3">
                {userDetails.name &&
                  userDetails.name
                    .split(" ")
                    .map((name) => name[0].toUpperCase())
                    .join("")}
              </h1>
            )}
          </div>
          <div className="flex flex-col  font-bold ">
            <h1>{userDetails.name}</h1>
            <h1>{userDetails.email}</h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-col border border-gray-300 border-gray-300k py-4 px-4 font-semibold border-r-0 border-l-0 ">
        {PaymentSucess ? (
          <Link to="/MyLearning">
            <a>My Learning</a>
          </Link>
        ) : (
          <div onClick={() => confirm("Make Payment")}>My Learning</div>
        )}
        <Link to="/cart">
          <a>My cart</a>
        </Link>
        <Link to="/cart">
          <a>My Wishlist</a>
        </Link>
      </div>
      <div className="flex flex-col px-4 py-3 font-semibold ">
        <a>Help</a>
        <button
          className="bg-gray-300 font-semibold px-2 py-1 rounded-sm mt-3 hover:bg-gray-400 "
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Logout;
