import React from "react";

const Privacy = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <div
      className="w-full border border-orange-500  "
      style={{ height: "600px" }}
    >
      <div className=" text-center py-4 text-xl mb-2  border border-b-orange-500  ">
        <h1 className="font-bold">Privacy</h1>
        <p className="text-md">Modify you privacy setting here.</p>
      </div>

      <div className="px-8 py-3">
        <h1 className="font-bold text-xl mb-6">Profile page settings</h1>
        <form action="" onSubmit={HandleSubmit}>
          <div className="flex gap-2 items-center mb-4">
            <input type="checkbox" class="h-5 w-5" required />
            <h1>Show your profile to logged-in users</h1>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" class="h-5 w-5" required />
            <h1>Show courses you’re taking on your profile page</h1>
          </div>

          <input
            type="submit"
            value="Save"
            className="cursor-pointer bg-blue-950 w-20 text-center text-white py-1 mt-4 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Privacy;
