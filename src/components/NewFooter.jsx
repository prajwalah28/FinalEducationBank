import React from "react";
import { Icons } from "../assets/assets";

const NewFooter = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@ngpit.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:789545685";
  };

  const handleAddressClick = () => {
    window.open("https://www.google.com/maps/place/AppXBuild+Technologies+Private+Limtited/@21.1209522,79.0462002,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c0eb7dc7470d:0x2e8a4e968f2ff96!8m2!3d21.1209472!4d79.0487751!16s%2Fg%2F11f2sccpyx?entry=ttu");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/nagpurittraining/");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/nagpurittraining/?igshid=YmMyMTA2M2Y%3D");
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/i/flow/login?redirect_after_login=%2Fnagpurit");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/@nagpurittraininginstitute3590");
  };

  const handleGoogleClick = () => {
    window.open("https://www.google.com/search?q=NagpurIT+Training+Institute&stick=H4sIAAAAAAAA_-NgU1I1qDBOSjFJSjM0NEmyNLMwNjS1MqhIsTQxS0o2N001SDFPsjSxXMQq7ZeYXlBa5BmiEFKUmJmXmZeu4JlXXJJZUlqSCgBCVEXPRwAAAA&hl=en-GB&mat=CUGuTsQRYuBIElcB8pgkaAcVNdWLYsY2Y7hqZHqIPQcVbPAE58jdPwDmr2-bN0q_V3crvAia79fu0dUp0PLIXbWXt3qg41_EHSfNyrWMeJfgRQFCaink82Q4OlzgTai2Ne0&authuser=0");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/nagpur-it-training-institute/");
  };


  return (
    <div className="flex sm:flex-col py-10 lg:flex-row justify-between px-40 gap-10 bg-blue-950 text-white  ">
      <div>
        <h1 className="text-2xl text-orange-600 font-semibold mb-5">
          Training Institute
        </h1>
        <ul className="list-disc text-lg font-semibold ">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl text-orange-600 font-semibold mb-5">
          Contact Info
        </h1>
        <div className="flex items-center gap-3 mb-4 font-semibold">
          <div onClick={handleCallClick} className="cursor-pointer">
            <Icons.IoCall className="text-3xl cursor-pointer" />
          </div>
          <div onClick={handleCallClick} className="cursor-pointer">
            <h1>Call Us</h1>
            <h1>789545685</h1>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 font-semibold">
          <div onClick={handleAddressClick}>
            <Icons.IoLocation className="text-3xl cursor-pointer" />
          </div>
          <p className="w-60 cursor-pointer" onClick={handleAddressClick}>
            Office address 1st Floor, Plot No. 10/4, STPI IT Park, Gayatri
            Nagar, Nagpur – 440022
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4 font-semibold">
          <div onClick={handleEmailClick}>
            <Icons.MdEmail className="text-3xl cursor-pointer" />
          </div>
          <div onClick={handleEmailClick} className="cursor-pointer">
            <h1>Mail Us</h1>
            <h1>support@ngpit.com</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={Icons.logo} alt="" className="w-60 h-20 rounded-lg mb-2" />
        <p className="w-40 text-center text-lg font-semibold ">
          “Power is Gained By Sharing Your Knowledge, Not Hoarding it”
        </p>
        <h1 className="text-2xl py-2 font-bold text-orange-600">
          Follow Us On
        </h1>
        <div className="flex gap-3 mt-3">
          <div onClick={handleFacebookClick}>
            <Icons.FaFacebookSquare className="text-3xl text-blue-600 cursor-pointer" />
          </div>
          <div onClick={handleYoutubeClick}>
            <Icons.FaYoutubeSquare className="text-3xl text-red-600 cursor-pointer" />
          </div>
          <div onClick={handleGoogleClick}>
            <Icons.FaSquareGooglePlus className="text-3xl cursor-pointer" />
          </div>
          <div onClick={handleLinkedInClick}>
            <Icons.FaLinkedin className="text-3xl text-blue-600 cursor-pointer" />
          </div>
          <div onClick={handleTwitterClick}>
            <Icons.FaTwitterSquare className="text-3xl text-blue-600 cursor-pointer" />
          </div>
          <div onClick={handleInstagramClick}>
            <Icons.FaInstagramSquare className="text-3xl text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;