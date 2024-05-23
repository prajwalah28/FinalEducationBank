import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountProfile from "../pages/AccountPage/AccountProfile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
// import MyLearning from "../pages/MyLearning/MyLearning";
import MyLearning from "../pages/MyLearning copy/MyLearning";
import VideoPlayer from "../pages/MyLearning copy/VideoPlayer";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
// import AllCourses from "../pages/Courses/AllCourses";
// import Cart from "../pages/Courses/Cart";
import CourseDetail from "../pages/CourseDetails/CourseDetails";
import Email from "../pages/Email/Email";
import Cart from "../pages/FetchedData/Cart";
import CoursePage from "../pages/FetchedData/CoursePage";
import HomeMain from "../pages/HomeMain/HomeMain";
import ProtectedRoute from "./ProtectedRouter";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" exact element={<Home />} />
        <Route
          path="/account"
          element={<ProtectedRoute Component={AccountProfile} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account/:category" element={<AccountProfile />} />
        <Route
          path="/MyLearning"
          element={<ProtectedRoute Component={MyLearning} />}
        />
        <Route
          path="/VideoPlayer"
          element={<ProtectedRoute Component={VideoPlayer} />}
        />
        <Route
          path="/Payment"
          element={<ProtectedRoute Component={PaymentPage} />}
        />
        <Route path="/courses" element={<CoursePage />} />
        {/* <Route path="/courses" element={<AllFetched />} /> */}

        {/* <Route path="/courses" element={<AllFetched/>} /> */}
        {/* <Route path="/courses" element={<FetchedCard />} /> */}
        <Route
          path="/courseDetails"
          element={<ProtectedRoute Component={CourseDetail} />}
        />
        <Route path="/cart" element={<ProtectedRoute Component={Cart} />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </div>
  );
};

export default Routers;
