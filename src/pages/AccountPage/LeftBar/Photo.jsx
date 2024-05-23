// import React from 'react'

// const Photo = () => {
//   return (
//     <div className="w-full border border-orange-500 "
//     style={{ height: "600px" }}>Photo</div>
//   )
// }

// export default Photo

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
// import { Icons } from "../../../assets/assets";

const Photo = () => {
  const [image, setImage] = useState(null);
  const [hasImage, setHasImage] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setHasImage(true);
  };

  const handleCancel = () => {
    setImage(null);
    setHasImage(false);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setHasImage(false);
  };

  return (
    <div
      className=" w-full border border-orange-500 "
      style={{ height: "600px" }}
    >
      <div>
        <div className="text-center  w-full">
          <h2 className="font-bold text-2xl mt-4">Photo</h2>
          <p
            className="mt-2 mb-6 font-medium border-b border-b-orange-500 w-full
"
          >
            Add a nice photo of yourself for your Account
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          {!image ? (
            <div className="flex-col items-center mt-14">
              <div className="px-8 flex items-center justify-center border-2 w-80 h-56 mx-auto ">
                <CgProfile size={120} className="mb-4 text-gray-500 " />
              </div>
              <div className="text-center mt-8">
                <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 ml-8 rounded text-center">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                <label className="ml-4 mr-8 px-10 py-2 bg-blue-500 rounded text-center text-white font-bold">
                  No file selected
                </label>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded"
                  disabled={!hasImage}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-col justify-center">
              <div className="">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="border-2 w-80 h-56 px-2 mx-auto"
                />
              </div>
              <div className="text-center mt-8 ml-4 ">
                <label className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded text-center ">
                  <button onClick={handleRemoveImage}>Remove Image</button>
                </label>
                <label className="ml-4 mr-8 px-10 py-2 bg-orange-500 rounded text-center text-white font-bold ">
                  {image.name}
                </label>
              </div>
              <div className="flex justify-center mt-10">
                <button className="px-6 py-2 bg-orange-500 text-white rounded">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Photo;
