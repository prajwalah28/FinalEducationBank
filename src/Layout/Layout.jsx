import React from "react";
import Header from "../components/Header/Header";
import NewFooter from "../components/NewFooter";
import Routers from "../routes/Routers";
const Layout = () => {
  return (
    <div className="flex flex-col  min-h-screen ">
      <Header />
      <div className=" flex-1 min-h-screen ">
        <Routers />
      </div>

      <NewFooter />
    </div>
  );
};
  
export default Layout;
