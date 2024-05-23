import React, { useContext } from "react";
import { UserContext } from "../../Context/LoginContext";

const RightSlide = () => {
  const { paymentSuccess, setPaymentSuccess } = useContext(UserContext);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    alert("Payment Successful");
  };
  return (
    <div
      className="bg-gray-200 w-[550px] font-bold rounded-r-xl "
      style={{ height: "600px" }}
    >
      <div className="border border-b-gray-700 py-4 ">
        <h1 className="px-8">Summary</h1>
        <div className="flex justify-between  px-8 ">
          <h1>Original price </h1>
          <h1>3,009</h1>
        </div>
      </div>
      <div className="flex justify-between px-8 py-2">
        <h1>Total : </h1>
        <h1>3,009</h1>
      </div>

      <div className="px-8  w-96 mx-auto mt-20 flex flex-col py-2 ">
        <p className="px-8">
          By completing your purchase you agree to these Terms of service.{" "}
        </p>
        <div className="mx-auto">
          <button onClick={handlePaymentSuccess} className="text-center bg-orange-500 px-14 mx-auto text-white py-2 mt-6 ">
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSlide;
