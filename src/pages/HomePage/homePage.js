import AboutComponent from "@/components/HomeComponents/AboutComponent";
import ContactComponent from "@/components/HomeComponents/ContactComponent";
import IntroductionComponent from "@/components/HomeComponents/IntroductionComponent";
import MySkills from "@/components/HomeComponents/MySkills";
import PortfolioComponent from "@/components/HomeComponents/PortfolioComponent";
import ResumeComponent from "@/components/HomeComponents/ResumeComponent";
import ServiceComponent from "@/components/HomeComponents/ServiceComponent";
import RightSidebar from "@/components/Shared/RightSidebar";
import React, { useEffect, useState } from "react";
const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const LeftSidebar = React.lazy(() =>
    import("@/components/Shared/LeftSidebar")
  );
  const LeftSideBarTab = React.lazy(() =>
    import("@/components/Shared/LeftSideBarTab")
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };

    // Set initial state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="grid lg:grid-cols-10 px-3 lg:px-0 gap-8 relative">
      {/* previous design without tab */}
      {/*  <div className="lg:h-screen lg:col-span-2  lg:sticky lg:top-0 flex items-center lg:left-2">
        <div className="border border-secondary_colour lg:w-full cs-screen:w-80 cs-screen-second:w-96 mx-auto rounded-xl">
          <React.Suspense fallback={<div>Loading...</div>}>
            {isMobile ? <LeftSideBarTab /> : <LeftSidebar />}
          </React.Suspense>
        </div>
      </div>
 */}

      {/*  top bg image */}

      {/*  top bg image */}
      <React.Suspense fallback={<div>Loading...</div>}>
        {isMobile ? (
          <LeftSideBarTab />
        ) : (
          <div className="lg:h-screen lg:col-span-2  lg:sticky lg:top-0 flex items-center lg:left-2">
            <div className="border border-secondary_colour lg:w-full cs-screen:w-80 cs-screen-second:w-96 mx-auto rounded-xl">
              <LeftSidebar />
            </div>
          </div>
        )}
      </React.Suspense>
      {/*  <div className="lg:col-span-7 lg:max-w-6xl mx-auto border lg:mt-16 sm:mt-6 mt-6"> */}
      <div className="lg:col-span-7   ">
        <div className="w-full lg:px-36 overflow-hidden">
          <IntroductionComponent></IntroductionComponent>
          <AboutComponent></AboutComponent>
          <ResumeComponent></ResumeComponent>
          <ServiceComponent></ServiceComponent>
          <MySkills></MySkills>
          <PortfolioComponent></PortfolioComponent>
          <ContactComponent></ContactComponent>
        </div>
      </div>
      <div className="lg:h-screen lg:col-span-1 lg:sticky lg:top-0 lg:flex items-center lg:right-0 hidden ">
        <div className="border border-secondary_colour  rounded-full lg:right-0 py-4 w-24">
          <RightSidebar></RightSidebar>
        </div>
      </div>
      {/*   <div className="lg:col-span-1  hidden lg:block border border-secondary_colour rounded-3xl lg:sticky lg:h-[450px] lg:w-24 lg:top-1/2 lg:-translate-y-1/2 lg:right-0">
        <RightSidebar></RightSidebar>
      </div> */}
    </div>
  );
};

export default HomePage;
