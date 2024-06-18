import React, { useContext, useState } from "react";
import { Icons } from "../../../assets/assets";
import { UserContext } from "../../../Context/LoginContext";
import baseUrl from "../../../config";

const Form = () => {
  const { UserAccountData, userDetails } = useContext(UserContext);

  const [formData, setFormData] = useState({
    id: userDetails.id,
    loginDetails: userDetails.id,
    image: null,
    firstName: UserAccountData.firstName,
    lastName: UserAccountData.lastName,
    language: "english",
    githubUrl: UserAccountData.githubUrl,
    linkedinUrl: UserAccountData.linkdinUrl,
  });

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("id", userDetails.id);
    data.append("loginDetails", userDetails.id);
    data.append("image", formData.image);
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("language", formData.language);
    data.append("githubUrl", formData.githubUrl);
    data.append("linkedinUrl", formData.linkedinUrl);

    try {
      const response = await fetch(`${baseUrl}/user`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log(response.ok);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="w-full border border-orange-500"
      style={{ height: "600px" }}
    >
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="text-center border border-b-orange-500 py-3">
          <h1 className="text-xl font-bold">
            {UserAccountData?.firstName || UserAccountData?.lastName
              ? `${UserAccountData.firstName} ${UserAccountData.lastName}`
              : "Guest"}
          </h1>
          <p>Add information about yourself</p>
        </div>

        <div className="px-4 border border-b-orange-500 py-4">
          <h1 className="mb-1">Basics:</h1>
          <div>
            <div className="border-2 border-blue-950 mb-2 flex items-center justify-between">
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="outline-none w-96 h-6 px-3"
                required
              />
              <div className="border border-l-blue-950 h-8 px-2 flex items-center">
                <Icons.MdModeEdit className="text-blue-600" />
              </div>
            </div>

            <div className="border-2 border-blue-950 flex items-center justify-between">
              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="outline-none w-96 h-6 px-3"
                required
              />
              <div className="border border-l-blue-950 h-8 px-2 flex items-center">
                <Icons.MdModeEdit className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 border border-b-orange-500 py-4">
          <div className="border-2 border-blue-950 px-2 h-8 flex items-center">
            <select
              id="languages"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="outline-none w-full"
              required
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
        </div>

        <div className="px-4 py-3">
          <h1>Links:</h1>
          <div className="flex justify-between border-2 border-blue-950">
            <div className="px-3 h-8 flex">
              <input
                type="text"
                name="githubUrl"
                placeholder="http://github.com/"
                value={formData.githubUrl}
                onChange={handleInputChange}
                className="w-80 outline-none"
                required
              />
            </div>
            <div className="border border-l-blue-950 px-10 flex items-center">
              <h1 className="text-sm">Git Profile</h1>
            </div>
          </div>

          <h1 className="text-xs mb-2 text-orange-500">
            Add your GitHub username
          </h1>
          <div className="flex justify-between border-2 border-blue-950">
            <div className="px-3 h-8 flex">
              <input
                type="text"
                name="linkedinUrl"
                placeholder="http://www.linkedin.com/"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                className="w-80 outline-none"
                required
              />
            </div>
            <div className="border border-l-blue-950 px-10 flex items-center">
              <h1 className="text-sm">LinkedIn Profile</h1>
            </div>
          </div>
          <h1 className="text-xs mb-2 text-orange-500">
            Add your LinkedIn username
          </h1>
        </div>


        <div className="px-4 py-2">
          <h1 className="text-lg font-semibold mb-2">Profile Image:</h1>
          <div className="flex justify-between items-center border-2 border-black  p-2 shadow-md bg-white">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="px-3 h-10 border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black"
              // required
            />
          </div>
        </div>

        <div className="border px-4 ml-4 w-24 text-center py-1 bg-blue-950 text-white cursor-pointer">
          <input type="submit" value="Save" className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default Form;
