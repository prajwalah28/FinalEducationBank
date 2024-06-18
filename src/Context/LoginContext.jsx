import React, { createContext, useState } from "react";
import GetAPIData from "./GetAPIData";
const UserContext = createContext();

const ContextProvider = ({ children }) => {
  // const [allFetched, setAllFetched] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [PaymentSucess, setPaymentSuccess] = useState(true);
  const [courseSetion, setcourseSection] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [datahide, setdatahide] = useState("true");
  const[allcoursetotal,setallcoursetotal] = useState([])
  // getting All courses from api using GetAPIData
  const Courses = GetAPIData("/courses");
  const UserAccountData = GetAPIData(`/user/${userDetails.id}`);

  const values = {
    Courses,
    UserAccountData,
    userDetails,
    setUserDetails,
    searchText,
    setSearchText,
    isLoggedIn,
    setIsLoggedIn,
    PaymentSucess,
    setPaymentSuccess,
    courseSetion,
    setcourseSection,
    datahide,
    setdatahide,
    allcoursetotal,
    setallcoursetotal
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export { ContextProvider, UserContext };
