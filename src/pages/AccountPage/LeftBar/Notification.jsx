import React from "react";

const Notification = () => {
  return (
    <div
      className="w-full border border-orange-500 "
      style={{ height: "600px" }}
    >
      <div className="text-center border border-b-orange-500  py-3">
        <h1 className="font-inter text-lg font-bold">Notification</h1>
        <p>Turn promotional email notification from NgpIT on or off</p>
      </div>
      <div className="px-4 border border-b-orange-500 py-4 ">
        <p className="font-inter text-4xl font-semibold leading-10 text-left text-black mb-4">
          I want to receive:
        </p>

        <div className="border border-solid border-gray-500 px-4 flex gap-2 py-6 mb-4">
          <div className="w-6 h-6 border-2 border-solid border-black"></div>
          <div>
            <p className="font-inter text-lg font-semibold leading-7 text-left">
              Announcements from instructors whose course’s I’m enrolled in
            </p>
            <p className="font-inter text-base font-light leading-7 text-left">
              To adjust this preference by course, leave this box checked and go
              to the<br></br>
              course dashboard and click on “options” to opt in or specific
              announcements
            </p>
          </div>
        </div>
        <div className="bg-blue-950 w-20 text-center text-white py-1 rounded-sm fontbol ">
          <p className="">Save</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
