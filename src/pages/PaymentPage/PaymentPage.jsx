import React from "react";
import LeftSlide from "./LeftSlide";
import RightBar from "../AccountPage/RigthBar/RightBar";
import RightSlide from "./RightSlide";

const PaymentPage = () => {
  return (
    <div className="flex justify-center items-center mx-auto py-10 border border-black rounded-xl shadow-xl">
      <div className="flex w-[1290px]" style={{ height: "600px" }}>
        <LeftSlide />
        <RightSlide />
      </div>
    </div>
  );
};

export default PaymentPage;
