import AboutComponent from "@/components/HomeComponents/AboutComponent";
import IntroductionComponent from "@/components/HomeComponents/IntroductionComponent";
import MySkills from "@/components/HomeComponents/MySkills";
import PortfolioComponent from "@/components/HomeComponents/PortfolioComponent";
import ResumeComponent from "@/components/HomeComponents/ResumeComponent";
import ServiceComponent from "@/components/HomeComponents/ServiceComponent";
import LeftSidebar from "@/components/Shared/LeftSidebar";
import RightSidebar from "@/components/Shared/RightSidebar";

const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-10 px-3 lg:px-0 gap-8">
      {/* <div className="relative">
        <div className="lg:col-span-3 border border-secondary_colour rounded-sm lg:sticky lg:h-[840px] lg:top-1/2 lg:-translate-y-1/2 lg:left-2">
          <LeftSidebar></LeftSidebar>
        </div>
      </div> */}
      <div className="lg:h-screen lg:col-span-2 lg:sticky lg:top-0 flex items-center lg:left-2">
        <div className="border border-secondary_colour lg:w-full w-[500px] mx-auto">
          <LeftSidebar></LeftSidebar>
        </div>
      </div>

      {/*  <div className="lg:col-span-7 lg:max-w-6xl mx-auto border lg:mt-16 sm:mt-6 mt-6"> */}
      <div className="lg:col-span-7   lg:mt-16 sm:mt-6 mt-6">
        <div className="w-full lg:px-36">
          <IntroductionComponent></IntroductionComponent>
          <AboutComponent></AboutComponent>
          <ResumeComponent></ResumeComponent>
          <ServiceComponent></ServiceComponent>
          <MySkills></MySkills>
          <PortfolioComponent></PortfolioComponent>
        </div>
      </div>
      <div className="lg:col-span-1 hidden lg:block border border-secondary_colour rounded-3xl lg:sticky lg:h-[450px] lg:w-24 lg:top-1/2 lg:-translate-y-1/2 lg:right-0">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default HomePage;
