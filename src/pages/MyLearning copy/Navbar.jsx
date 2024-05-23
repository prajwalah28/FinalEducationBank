import React, { useState } from "react";
import LearningReview from "./LearningReview";
import Overview from "./Overview";
import QandA from "./QandA";
import Notes from "./Notes";
import Accordion from "./Accordion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderComponent = () => {
    switch (activeLink) {
      case "course-content":
        return <Accordion />;
      case "overview":
        return <Overview />;
      case "q-and-a":
        return <QandA />;
      case "notes":
        return <Notes />;
      // case "announcements":
      //   return <Announcements />;
      case "reviews":
        return <LearningReview />;
      // case "learning-tools":
      //   return <LearningTools />;
      default:
        return <Accordion />;
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 font-bold">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow  flex justify-around">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("course-content")}
            >
              Course Content
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("overview")}
            >
              Overview
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("q-and-a")}
            >
              Q&A
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("notes")}
            >
              Notes
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("announcements")}
            >
              Announcements
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
              onClick={() => handleLinkClick("reviews")}
            >
              Reviews
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black"
              onClick={() => handleLinkClick("learning-tools")}
            >
              Learning Tools
            </a>
          </div>
        </div>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default Navbar;
