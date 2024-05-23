// import Image from "next/image";
import Tabs from "../components/Tabs";
import h1 from '../assets/images/h1.png'
import h2 from '../assets/images/h2.png'
import h3 from '../assets/images/h3.png'
import h4 from '../assets/images/h4.png'
import h5 from '../assets/images/h5.png'
import h6 from '../assets/images/h6.png'
import h7 from '../assets/images/h7.png'

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Development",
      value: "Web Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950 ">
          <p>Web Development</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "IT Certifications",
      value: "IT Certifications",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
          <p>IT Certifications</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Leadership",
      value: "Leadership",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
          <p>Leadership </p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Data Science",
      value: "Data Science",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
          <p>Content </p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Communication",
      value: "Communication",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
          <p>Communication </p>
          <DummyContent4 />
        </div>
      ),
    },
    {
        title: "Business Analytics",
        value: "Business Analytics",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
            <p>Business Analytics </p>
            <DummyContent5 />
          </div>
        ),
      },
      {
        title: "Intelligence",
        value: "Intelligence",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-950 to-indigo-950">
            <p>Intelligence tab</p>
            <DummyContent6 />
          </div>
        ),
      },
  ];

  return (
    <>
    <div className="mt-4 px-20">
        <h1 className="text-4xl font-bold font-sans">All the skills you need in one place</h1>
        <p className="text-2xl italic mt-4">From critical skills to technical topics, NgpIT supports your professional development.</p>
    </div>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40" style={{height:"500px"}}>
      <Tabs tabs={tabs} />
    </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <img
      src={h1}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent1 = () => {
    return (
      <img
        src={h2}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const DummyContent2 = () => {
    return (
      <img
        src={h3}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const DummyContent3 = () => {
    return (
      <img
        src={h4}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const DummyContent4 = () => {
    return (
      <img
        src={h5}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const DummyContent5 = () => {
    return (
      <img
        src={h6}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const DummyContent6 = () => {
    return (
      <img
        src={h7}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
