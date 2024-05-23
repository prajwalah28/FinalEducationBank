import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../../config";
const DeleteForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/login/delete `, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        toast.success("Account Deleted!");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 500);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while deleting the account.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overlay">
      <div className="bg-white w-96 shadow-lg rounded-md p-6">
        <h1 className="font-bold text-xl mb-4">Close your account?</h1>
        <p className="text-gray-700 mb-6">
          Are you sure you want to close your account?
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <input
              type="submit"
              value="Close account"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
