import React from "react";
import Card from "./Card";
import home_img from "../../assets/images/home_img.jpeg";
import yashbhau from "../../assets/images/yashbhau.png";
import { Data } from "./Data";
import Bar from "./H_Bar";
import HomeComponents from "../../components/HomeComponents";
import Review from "../../components/Review";
import HowToBegin from "../../components/HowToBegin";
import SupportTeam from "../../components/SupportTeam";
import Instructor from "../Instructor/Instructor";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen border"
        style={{ backgroundImage: `url(${home_img})`, height: "600px" }}
      >
        <div className=" w-96 mt-40 ml-32 p-4 ">
          <h1 className="text-6xl font-bold w-46 mb-4">Come teach with us</h1>
          <p className="text-lg mb-4">
            Become an instructor and change lives - including your own
          </p>
          <Link to="/email"><a
            
            className="border-2 border-orange-500 px-28  py-2 font-bold text-lg  rounded-sm"
          >
            Get started
          </a></Link>
        </div>
      </div>

      <div className=" mt-6 text-5xl font-bold text-center py-3">
        <h1>So many reasons to start</h1>
      </div>
      <div className=" flex justify-around">
        {Data.map((items, index, arr) => {
          return (
            <Card
              key={index}
              img={items.img}
              title={items.title}
              desc={items.desc}
            />
          );
        })}
      </div>

      <Bar />
      <HomeComponents />
      <Instructor />
      <Ratings />
      {/* <CourseDetails/> */}
    </>
  );
};

export default Home;
