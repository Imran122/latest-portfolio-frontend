import ProjectDetailsComponentPage from "@/components/ProjectDetailsComponent/ProjectDetailsComponentPage";
import LeftSidebar from "@/components/Shared/LeftSidebar";
import RightSidebarDetailsPage from "@/components/Shared/RightSidebarDetailsPage";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="lg:grid lg:grid-cols-10 px-3 lg:px-0 gap-8 bg-[#212529]">
      {/* <div className="relative">
          <div className="lg:col-span-3 border border-secondary_colour rounded-sm lg:sticky lg:h-[840px] lg:top-1/2 lg:-translate-y-1/2 lg:left-2">
            <LeftSidebar></LeftSidebar>
          </div>
        </div> */}
      <div className="lg:h-screen lg:col-span-2 lg:sticky lg:top-0 flex items-center lg:left-2">
        <div className="border border-secondary_colour lg:w-full cs-screen:w-80 cs-screen-second:w-96 mx-auto rounded-xl relative">
          <LeftSidebar></LeftSidebar>
          <div className="absolute md:hidden lg:block -right-5 -top-5 w-10 h-10 border border-primary_colour animate-spin-slow text-center p-2 text-2xl rounded-full text-purple-400">
            <Link className="shadow-xl shadow-primary_colour" href="/">
              <FaHome />
            </Link>
          </div>
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

      <div className="lg:h-screen lg:col-span-1 lg:sticky lg:top-0 lg:flex items-center lg:right-0 ">
        <RightSidebarDetailsPage></RightSidebarDetailsPage>
      </div>
      <div className="mt-10  lg:hidden  w-full  border border-primary_colour text-center p-3 text-2xl rounded-xl text-purple-400">
        <Link
          className="shadow-xl shadow-primary_colour flex gap-4 justify-center items-center"
          href="/"
        >
          HOME <FaHome />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
