import React from "react";

const Payment = () => {
  return (
    <div
      className="w-full border border-orange-500 "
      style={{ height: "600px" }}
    >
      <div className="px-10">
        <div className=" text-center py-4 font-bold text-xl mb-2">
          <h1>Payment methods</h1>
        </div>

        <div className="tacbox flex items-center gap-3 bg-gray-300 py-6 justify-center px-8">
          <input id="checkbox" type="checkbox" class="h-5 w-5" />
          <label for="checkbox">
            {" "}
            Show your saved payment methods on the checkout step
          </label>
        </div>

        <div className="mt-10">
          <div className="pb-8 ">
            <h1 className="font-bold text-xl">Your saved payment methods </h1>
          </div>
          <div className="border border-black text-center py-20">
            You don’t have any saved payment methods
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
