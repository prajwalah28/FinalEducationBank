import React, { useState, useEffect } from "react";
import { Icons } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import {Base_URL} from "../../../config";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (showLoader) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
        navigate("/login");
      }, 2000); // 3 seconds delay
      return () => clearTimeout(timeout);
    }
  }, [showLoader]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${Base_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup successful");
      setShowLoader(true);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-14 ">
      <div className="flex flex-col content-center border px-10 py-10 shadow-xl rounded-md">
        <h1 className="mb-10 font-bold text-xl ">Sign up and Start Learning</h1>
        <form
          className="flex flex-col place-content-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="w-98 outline-0 border-2 px-3 py-3 placeholder:font-bold placeholder-gray-900 border-orange-300 rounded"
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-98 outline-0 border-2 px-3 py-3 placeholder:font-bold placeholder-gray-900 border-orange-300 rounded"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex items-center border-2 border-orange-300 w-98 outline-0  px-3 py-3 gap-8  rounded ">
            <input
              className=" placeholder:font-bold placeholder-gray-900 outline-0 w-80"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              className="float-end w-6"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <Icons.BiSolidShow className="h-6 w-6" />
              ) : (
                <Icons.BiSolidHide className="h-6 w-6" />
              )}
            </button>
          </div>

          <div>
            <h3 className="mt-4 mb-2  text-center text-md py-2 font-semibold ">
              By signing up, you agree to our{" "}
              <span className="text-orange-400 cursor-pointer">Terms</span> and{" "}
              <span className="text-orange-400 cursor-pointer">
                Privacy Policy
              </span>
            </h3>

            <button
              className="px-44 py-3 bg-blue-950 text-white rounded drop-shadow-md relative" // Add relative class
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <HashLoader
                  color={"#FFFFFF"}
                  loading={true}
                  size={25}
                  css={
                    "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
                  } // Center the loader
                />
              ) : (
                "Sign Up"
              )}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </form>

        <ToastContainer />

        <div className="w-98 bg-gray-300 h-0.5 mt-8 "></div>

        <div>
          <h3 className="mt-4 text-center text-lg font-semibold ">
            Already have an account ?
            <Link to={"/login"}>
              <span className="text-orange-500 cursor-pointer font-bold">
                {" "}
                Log In
              </span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Signup;
