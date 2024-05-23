import React from "react";
import { Icons } from "../../../assets/assets";

const Security = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div
      className=" w-full border border-orange-500 "
      style={{ height: "600px" }}
    >
      <form action="" onSubmit={HandleSubmit}>
        <div className="text-center border border-b-orange-500  py-3">
          <h1 className="text-lg font-semibold">Account</h1>
          <p>Edit your account settings and change your password here.</p>
        </div>

        <div className="px-4 border border-b-orange-500 py-4 ">
          <h1 className="mb-1">Email : </h1>
          <div className="">
            <div className="border-2 border-blue-950  flex items-center justify-between ">
              {" "}
              <input
                type="text"
                placeholder="Email"
                className=" outline-none w-96 h-6 px-3"
                required
              />
              <div className=" border border-l-blue-950 h-8 px-2 flex items-center   ">
                <Icons.MdModeEdit className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 border border-b-orange-500 py-4 ">
          <h1 className="mb-1">Password : </h1>
          <div className="">
            <div className="border-2 border-blue-950  flex items-center justify-between mb-2 ">
              {" "}
              <input
                type="text"
                placeholder="Enter current Password"
                className=" outline-none w-96 h-8 px-3"
                required
              />
            </div>
            <div className="border-2 border-blue-950  flex items-center justify-between mb-2">
              {" "}
              <input
                type="text"
                placeholder="Enter new Password"
                className=" outline-none w-96 h-8 px-3"
                required
              />
            </div>
            <div className="border-2 border-blue-950  flex items-center justify-between mb-2">
              {" "}
              <input
                type="text"
                placeholder="Re-type new Password"
                className=" outline-none w-96 h-8 px-3"
                required
              />
            </div>
            <div className="border px-4 ml-2 w-44 text-center py-1 bg-blue-950 text-white cursor-pointer">
              <input
                type="submit"
                value="Change Password"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Security;
