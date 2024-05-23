import React from "react";
import { BiSolidCreditCardFront } from "react-icons/bi";

const LeftSlide = () => {
  return (
    <div className=" bg-gray-100 py-10 rounded-l-xl" style={{ height: "600px" }}>
      <div className="px-6">
        <div className="font-bold ">
          <h1 className="text-3xl mb-2">Payment</h1>
          <h1 className="text-xl mb-2">Billing address</h1>
        </div>

        <div className="flex flex-col">
          <label for="maharashtraStates">State / Union Territory:</label>
          <select
            id="maharashtraStates"
            className="h-10 px-4 border-2 border-black rounded-sm"
          >
            <option value="">Maharashtra</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nashik">Nashik</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Solapur">Solapur</option>
            <option value="Thane">Thane</option>
            <option value="Amravati">Amravati</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Akola">Akola</option>
          </select>
        </div>
        <div className="py-4 text-lg">
          <p>
            NgpIT is mandated by law to gather relevant transaction taxes for
            purchases conducted within specific tax jurisdictions.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold py-3">Payment method</h1>
          <div className="border border-orange-500 py-4 mt-2 flex justify-between px-2 ">
            <div>
              <div className="form-check flex gap-3 items-center">
                <input
                  type="radio"
                  class="form-check-input"
                  className="w-10 h-5"
                />
                <BiSolidCreditCardFront className="w-10 h-10" />
                <h1>Debit / Credit Card</h1>
              </div>
              <div className="form-check flex gap-3 items-center">
                <input
                  type="radio"
                  class="form-check-input"
                  className="w-10 h-5"
                />
                <BiSolidCreditCardFront className="w-10 h-10" />
                <h1>Debit / Credit Card</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"
                alt=""
                className="w-10 h-6"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png"
                alt=""
                className="w-10 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSlide;
