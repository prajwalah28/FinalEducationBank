import React from "react";
import { useParams } from "react-router-dom";
import RightBar from "./RigthBar/RightBar";
import Form from "./LeftBar/Form";
import Payment from "./LeftBar/Payment";
import Privacy from "./LeftBar/Privacy";
import AccountClose from "./LeftBar/AccountClose";
import Notification from "./LeftBar/Notification";
import Photo from "./LeftBar/Photo";
import Security from "./LeftBar/Security";

const AccountProfile = () => {
  const { category } = useParams();

  let activeFormComponent;
  switch (category) {
    case "payment":
      activeFormComponent = <Payment />;
      break;
    case "privacy":
      activeFormComponent = <Privacy />;
      break;
    case "delete":
      activeFormComponent = <AccountClose />;
      break;
    case "notification":
      activeFormComponent = <Notification />;
      break;
    case "security":
      activeFormComponent = <Security />;
      break;
    case "photo":
      activeFormComponent = <Photo />;
      break;
    default:
      activeFormComponent = <Form />;
  }

  return (
    <div className="flex justify-center items-center h-screen mx-auto -mt-16 ">
      <div className="flex w-[1290px]" style={{ height: "600px" }}>
        <RightBar />
        {activeFormComponent}
      </div>
    </div>
  );
};

export default AccountProfile;
