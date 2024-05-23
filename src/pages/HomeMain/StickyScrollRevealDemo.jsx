import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
const content = [
  {
    title: "Hands-on training",
    description:
      "Enhance your skills efficiently with AI-driven coding exercises, practice tests, skills assessments, labs, and workspaces.",
    content: (
      <div className="h-80 w-80 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={s1} className="h-80 " />
      </div>
    ),
  },
  {
    title: "Certification prep",
    description:
      "Prepare for industry-recognized certifications by tackling real-world challenges and earning badges as you progress.",
    content: (
      <div className="h-80 w-80  flex items-center justify-center text-white">
        <img src={s2} className="h-80 " />
      </div>
    ),
  },
  {
    title: "Insights and analytics",
    description:
      "Accelerate your progress towards goals with advanced insights and support from a dedicated customer success team, ensuring effective learning.",
    content: (
      <div className="h-80 w-80 bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img src={s3} className="h-80 " />
      </div>
    ),
  },
  {
    title: "Customizable content",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    content: (
      <div className="h-80 w-80 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img src={s4} className="h-80 " />
      </div>
    ),
  },
  {
    title: "Customizable content",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    content: (
      <div className="h-80 w-80 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img src={s4} className="h-80 " />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="mt-4 mb-8">
         <h1 className="text-4xl font-bold font-sans mb-8 px-20">Learning focused on your goals</h1>
      <StickyScroll content={content} />
    </div>
  );
}
