
import React, { useState } from "react";
import DeleteForm from "./DeleteForm";

const AccountClose = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div
      className="w-full border border-orange-500"
      style={{ height: "600px" }}
    >
      <div className="text-center py-4 text-xl mb-2 border border-b-orange-500">
        <h1 className="font-bold">Close account</h1>
        <p className="text-md">Close your account permanently</p>
      </div>

      <div className="px-8 py-6">
        <p className="font-semibold">
          <span className="text-red-600 font-bold">Warning:</span> If you close
          your account, you will be unsubscribed from all your courses, and will
          lose access forever.
        </p>
        <button
          className="bg-blue-950 px-3 text-white py-1 mt-4"
          onClick={() => setShow(true)}
        >
          Close account
        </button>
        {show && <DeleteForm onClose={handleClose} onSubmit={handleSubmit} />}
      </div>
    </div>
  );
};

export default AccountClose;
