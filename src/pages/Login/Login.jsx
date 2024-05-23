// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { UserContext } from "../../Context/LoginContext";
// import { Icons } from "../../assets/assets";
// import baseUrl from "../../config";

// const Authentication = () => {
//   const navigate = useNavigate();
//   const [hide, SetHide] = useState(false);
//   const { setUserDetails, setIsLoggedIn } = useContext(UserContext);

//   const ChangeIcon = () => {
//     SetHide(!hide);
//   };

//   useEffect(() => {
//     const storedUserDetails = localStorage.getItem("userDetails");
//     if (storedUserDetails) {
//       setUserDetails(JSON.parse(storedUserDetails));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const Subform = async (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;

//     try {
//       const response = await fetch(`${baseUrl}/login`, {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("userDetails", JSON.stringify(data));
//         setIsLoggedIn(true);
//         setUserDetails(data);
//         toast.success("Login successful");

//         const timeout = setTimeout(() => {
//           navigate("/");
//         }, 1000);
//         return () => clearTimeout(timeout);
//       } else {
//         toast.error("Login failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred while processing your request.");
//     }
//   };

//   return (
//     <div style={{ height: "80vh", marginTop: "40px" }}>
//       <div className="border w-96 mx-auto mb-5 shadow-xl rounded-md  ">
//         <div className="w-80  py-3 mx-auto  font-bold  ">
//           <div className="py-2 text-xl">
//             <h1>Login to your NgpIT account</h1>
//           </div>

//           <div className="border-2 border-orange-400 mt-4 mb-5 py-3 flex items-center gap-3 px-3">
//             <Icons.FaApple className="text-4xl" />
//             <h1>Continue with Apple</h1>
//           </div>

//           <div className="border-2 border-orange-400 mb-5 py-3 flex items-center  gap-3 px-3">
//             <Icons.FcGoogle className="text-4xl" />
//             <h1>Continue with Google</h1>
//           </div>

//           <form action="" onSubmit={Subform}>
//             <div className="border-2 border-orange-400 mb-5 py-3 flex items-center ">
//               <input
//                 type="email" // corrected to lowercase 'email'
//                 name="email" // added name attribute
//                 placeholder="Email"
//                 className="px-5 outline-none"
//                 required
//               />
//             </div>

//             <div className="border-2 border-orange-400 mb-5 py-3 flex items-center justify-between px-5">
//               <input
//                 type={hide ? "text" : "password"}
//                 name="password" // added name attribute
//                 placeholder="Password"
//                 className=" outline-none"
//                 required
//               />

//               <div onClick={ChangeIcon} className="text-2xl cursor-pointer">
//                 {hide ? <Icons.BiSolidShow /> : <Icons.BiSolidHide />}
//               </div>
//             </div>

//             <div className="mx-auto w-44 px-2">
//               <h1>
//                 or{" "}
//                 <span className="font-bold text-orange-500">
//                   Forget Password
//                 </span>
//               </h1>
//             </div>

//             <div className="flex justify-items-center justify-center ">
//               <input
//                 type="submit"
//                 value="Login"
//                 className="bg-blue-950 text-center text-white w-80 py-3  mt-2 cursor-pointer rounded-sm"
//               />
//             </div>
//           </form>

//           <div className="mt-4">
//             <hr />
//           </div>
//           <div className=" mx-auto text-center  py-3">
//             <h1>
//               Don't have an account ?{" "}
//               <Link to="/signup">
//                 <span className=" text-orange-500 cursor-pointer ">
//                   Sign Up
//                 </span>
//               </Link>
//             </h1>
//           </div>
//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authentication;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Context/LoginContext";
import { Icons } from "../../assets/assets";
import baseUrl from "../../config";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";

const Authentication = () => {
  const navigate = useNavigate();
  const [hide, SetHide] = useState(false);
  const [value, setValue] = useState("");
  const {
     datahide,
    setdatahide,
    userDetails,
    setUserDetails,
    // isLoggedIn,
    setIsLoggedIn,
  } = useContext(UserContext);
  const [loginSuccess, setLoginSuccess] = useState(false);
  // jai ho
  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDetails = {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      };

      // Check if the user exists in loginDebaseUrlbaseUrltails API
      const checkResponse = await fetch(
        `${baseUrl}/loginDetails?email=${user.email}`
      );
      if (checkResponse.ok) {
        const users = await checkResponse.json();
        const existingUser = users.find((u) => u.email === user.email);

        if (existingUser) {
          // User exists, log them in without making a POST request
          localStorage.setItem("userDetails", JSON.stringify(existingUser));
          toast.success("Google login successful");
          setIsLoggedIn(true);
          setUserDetails(existingUser);
          setdatahide(!datahide);
          // setLoginSuccess(true);
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        } else {
          // User does not exist, make a POST request to sign up
          const response = await fetch(`${baseUrl}/signup`, {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("userDetails", JSON.stringify(data));
            toast.success("Google signup successful");
            setIsLoggedIn(true);
            setUserDetails(data);
            setdatahide(!datahide);
            // setLoginSuccess(true);
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          } else {
            toast.error("Google signup failed");
          }
        }
      } else {
        toast.error("Error checking user details");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("Google login failed");
    }
  };

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setValue(JSON.parse(storedUserDetails).email || "");
      setUserDetails(JSON.parse(storedUserDetails));
      setIsLoggedIn(true);
    }
  }, []);

  const ChangeIcon = () => {
    SetHide(!hide);
  };

  const Subform = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userDetails", JSON.stringify(data));
        setIsLoggedIn(true);
        setUserDetails(data);
        setLoginSuccess(true);
        toast.success("Login successful");
        setdatahide(!datahide);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div style={{ height: "80vh", marginTop: "40px" }}>
      <div className="border w-96 mx-auto mb-5 shadow-xl rounded-md  ">
        <div className="w-80  py-3 mx-auto  font-bold  ">
          <div className="py-2 text-xl">
            <h1>Login to your NgpIT account</h1>
          </div>

          <div
            onClick={handleClick}
            className="border-2 border-orange-400 mt-4 mb-5 py-3 flex items-center gap-3 px-3"
          >
            <Icons.FaApple className="text-4xl" />
            <h1>Continue with Apple</h1>
          </div>

          <div
            onClick={handleClick}
            className="border-2 border-orange-400 mb-5 py-3 flex items-center gap-3 px-3 cursor-pointer"
          >
            <Icons.FcGoogle className="text-4xl" />
            <h1>Continue with Google</h1>
          </div>

          <form action="" onSubmit={Subform}>
            <div className="border-2 border-orange-400 mb-5 py-3 flex items-center">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-5 outline-none"
                required
              />
            </div>

            <div className="border-2 border-orange-400 mb-5 py-3 flex items-center justify-between px-5">
              <input
                type={hide ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="outline-none"
                required
              />
              <div onClick={ChangeIcon} className="text-2xl cursor-pointer">
                {hide ? <Icons.BiSolidShow /> : <Icons.BiSolidHide />}
              </div>
            </div>

            <div className="mx-auto w-44 px-2">
              <h1>
                or{" "}
                <span className="font-bold text-orange-500">
                  Forget Password
                </span>
              </h1>
            </div>

            <div className="flex justify-items-center justify-center">
              <input
                type="submit"
                value="Login"
                className="bg-blue-950 text-center text-white w-80 py-3 mt-2 cursor-pointer rounded-sm"
              />
            </div>
          </form>

          <div className="mt-4">
            <hr />
          </div>
          <div className="mx-auto text-center py-3">
            <h1>
              Don't have an account ?{" "}
              <Link to="/signup">
                <span className="text-orange-500 cursor-pointer">Sign Up</span>
              </Link>
            </h1>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
