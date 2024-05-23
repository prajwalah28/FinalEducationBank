import SimpleImageSlider from "react-simple-image-slider";
import flowerImg from "../../assets/images/hom2.png";
import Img1 from "../../assets/images/home3.png";
import Img2 from "../../assets/images/home4.png";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { TabsDemo } from "../../components/TabsDemo";
import ScrollReview from "./ScrollReview";
import { Testimonials } from "./Testimonials";

const HomeMain = () => {
  const images = [flowerImg, Img1, Img2];
  return (
    <>
      <div className="relative ">
        <div className="w-full  flex justify-center items-center -mt-16 h-screen">
          <SimpleImageSlider
            width={1400}
            height={"80vh"}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={1}
            loop={true}
            autoPlay={true}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            className="rounded-lg shadow-lg "
          />
        </div>

        <TabsDemo />
        <StickyScrollRevealDemo />
        {/* <Testimonials/> */}
      </div>
    </>
  );
};

export default HomeMain;
