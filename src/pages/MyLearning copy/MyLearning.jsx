import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext";

import baseUrl from "../../config";

function MyLearning() {
  const { userDetails, setcourseSection } = useContext(UserContext);
  const [coursesInCart, setCoursesInCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userDetails.cart && userDetails.cart.length > 0) {
      setCoursesInCart(userDetails.cart);
    }
  }, [userDetails.cart]);

  const handleSection = async (courseid) => {
    try {
      const response = await fetch(`${baseUrl}/courses/${courseid}`);
      const data = await response.json();
      setcourseSection(data.section);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="font-inter text-4xl font-bold leading-tight text-center ">
        Start Your Learning, {userDetails.name}
      </h1>
      <div className="container mx-auto px-4 mt-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Course
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ratings
              </th>
            </tr>
          </thead>
          <Link to="/VideoPlayer">
            <div>
              {" "}
              <tbody className="bg-white divide-y divide-gray-200">
                {coursesInCart.map((item, index) => (
                  <tr key={index} className="cursor-pointer hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{index + 1}</div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => handleSection(item.courses.id)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {item.courses && item.courses.image && (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={item.courses.image}
                              alt={item.courses.courseTitle}
                            />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.courses ? item.courses.courseTitle : ""}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.courses ? item.courses.ratings : ""}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </Link>
        </table>
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default MyLearning;
