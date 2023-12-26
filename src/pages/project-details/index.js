import ProjectDetailsComponentPage from "@/components/ProjectDetailsComponent/ProjectDetailsComponentPage";
import LeftSidebar from "@/components/Shared/LeftSidebar";
import RightSidebar from "@/components/Shared/RightSidebar";
import RightSidebarDetailsPage from "@/components/Shared/RightSidebarDetailsPage";
import React from "react";

const ProjectDetails = () => {
  return (
    <div className="lg:grid lg:grid-cols-10 px-3 lg:px-0 gap-8 bg-[#212529]">
      {/* <div className="relative">
          <div className="lg:col-span-3 border border-secondary_colour rounded-sm lg:sticky lg:h-[840px] lg:top-1/2 lg:-translate-y-1/2 lg:left-2">
            <LeftSidebar></LeftSidebar>
          </div>
        </div> */}
      <div className="lg:h-screen lg:col-span-2 lg:sticky lg:top-0 flex items-center lg:left-2">
        <div className="border border-secondary_colour lg:w-full cs-screen:w-80 cs-screen-second:w-96 mx-auto rounded-xl">
          <LeftSidebar></LeftSidebar>
        </div>
      </div>

      {/*  <div className="lg:col-span-7 lg:max-w-6xl mx-auto border lg:mt-16 sm:mt-6 mt-6"> */}
      <div className="lg:col-span-7   lg:mt-16 sm:mt-6 mt-6">
        <div className="w-full lg:px-36 overflow-hidden">
          <ProjectDetailsComponentPage />
        </div>
      </div>

      {/*   <div className="lg:h-screen lg:col-span-1 lg:sticky lg:top-0 lg:flex  lg:right-0 hidden ">
        <div className="border border-secondary_colour lg:top-10 rounded-full lg:right-0 py-4 w-24">
        <RightSidebarDetailsPage></RightSidebarDetailsPage>
        </div>
      </div> */}

      <div className="lg:col-span-1 hidden lg:block   lg:fixed lg:py-2 lg:w-24 lg:top-28 lg:-translate-y-1/2 lg:right-3">
        <RightSidebarDetailsPage></RightSidebarDetailsPage>
      </div>

      {/*    mobile device er home button . hidden for large */}
      <button className="lg:col-span-1 mt-4 mb-4 lg:hidden block group relative p-4 overflow-hidden rounded-3xl bg-white text-xl shadow w-full focus:outline-none">
        <div className="absolute inset-0 w-3 bg-primary_colour transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white text-center">
          HOME
        </span>

        <div className="absolute inset-0 rounded-3xl border-2 border-primary_colour pointer-events-none"></div>
      </button>
      {/*    mobile device er home button . hidden for large */}
    </div>
  );
};

export default ProjectDetails;
