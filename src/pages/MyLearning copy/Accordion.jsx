// import React, { useState, useContext } from 'react';
// import { UserContext } from '../../Context/LoginContext';

// const Accordion = () => {
//   const [openSectionId, setOpenSectionId] = useState(null);
//   const { courseSetion } = useContext(UserContext);

//   const toggleSection = (id) => {
//     setOpenSectionId(openSectionId === id ? null : id);
//   };

//   return (
//     <ul className="divide-y divide-gray-200">
//       {courseSetion.map((section) => (
//         <li key={section.id}>
//           <div
//             onClick={() => toggleSection(section.id)}
//             className="cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-50"
//           >
//             <h2 className="text-lg font-semibold">{section.sectionName}</h2>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-6 w-6 ${openSectionId === section.id ? 'transform rotate-180' : ''}`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={openSectionId === section.id ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
//               />
//             </svg>
//           </div>
//           {openSectionId === section.id && (
//             <ul>
//               {section.videos.map((video) => (
//                 <li key={video.id} className="ml-4 py-2">
//                   <h3 className="text-lg font-semibold">{video.title}</h3>
//                   <p className="text-gray-500">{video.duration}</p>
//                   <a
//                     href={video.videoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     Watch Video
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Accordion;

import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/LoginContext";

const Accordion = () => {
  const [openSectionId, setOpenSectionId] = useState(null);
  const { courseSetion } = useContext(UserContext);

  const toggleSection = (id) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  return (
    <ul className="divide-y divide-gray-200">
      {courseSetion.map((section) => (
        <li key={section.id} className="bg-white shadow-sm rounded-md mb-4">
          <div
            onClick={() => toggleSection(section.id)}
            className="cursor-pointer flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-t-md transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {section.sectionName}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                openSectionId === section.id ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  openSectionId === section.id
                    ? "M19 9l-7 7-7-7"
                    : "M9 5l7 7-7 7"
                }
              />
            </svg>
          </div>
          {openSectionId === section.id && (
            <ul className="bg-gray-50 rounded-b-md">
              {section.videos.map((video) => (
                <li key={video.id} className="ml-6 py-3 border-b last:border-0">
                  <h3 className="text-md font-medium text-gray-700">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.duration}</p>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Watch Video
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
