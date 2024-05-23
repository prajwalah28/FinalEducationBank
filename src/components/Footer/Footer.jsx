import React from "react";
import { Icons } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white flex justify-between flex-col gap-8 px-20 py-8 ">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="flex flex-col gap-1">
            <h1>Teach on NgpIT</h1>
            <h1>Get the app</h1>
            <h1>About us</h1>
            <h1>Contact us</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1>Careers</h1>
            <h1>Help and support</h1>
            <h1>Accessibility Statement </h1>
            <h1>Affiliate</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1>Terms</h1>
            <h1>Privacy Policy</h1>
            <h1>Sitemap</h1>
            <h1>Cookie Setting</h1>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-2 border border-white h-10 px-5 items-center">
            <Icons.AiOutlineGlobal className="text-2xl" />
            <h1 className="text-"> English</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <img src={Icons.logo} alt="" className="w-40 rounded-md" />
        <h1>@2024 NgpIT.Inc.</h1>
      </div>
    </div>
  );
};

export default Footer;
