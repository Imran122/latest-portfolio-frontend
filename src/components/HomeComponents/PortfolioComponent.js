import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdWorkHistory } from "react-icons/md";
import project3 from "../../assets/images/portfolio/portfolio1.jpg";
import project2 from "../../assets/images/portfolio/portfolio2.png";
import project1 from "../../assets/images/portfolio/template.png";
import PortfolioDetailsComponent from "./PortfolioDetailsComponent";
const PortfolioComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [activeProject, setActiveProject] = useState("All");
  const clickForFliter = (data) => {
    setActiveProject(data);
  };

  return (
    <div className="relative " id="portfolio">
      {/*  work history portfolio button */}
      <div
        className="middle-body-buton mt-20"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <MdWorkHistory />
        <h4>PORTFOLIO</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3
          className="middle-body-title mb-4"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Featured <span className="text-primary_colour"> Projects</span>
        </h3>

        {/* categorey list name desaign */}
        <div className=" flex flex-row md:gap-2 justify-center items-center mb-2">
          <button className="p-4 cursor-pointer hover:text-primary_colour cs-screen:text-xl cs-screen:font-medium text-white text-xs md:text-xl md:font-medium lg:text-2xl lg:font-semibold">
            All
          </button>
          <button className="p-4 cursor-pointer hover:text-primary_colour cs-screen:text-xl cs-screen:font-medium text-white text-xs md:text-xl md:font-medium lg:text-2xl lg:font-semibold">
            Web Design
          </button>

          <button className="p-4 cursor-pointer hover:text-primary_colour cs-screen:text-xl cs-screen:font-medium text-xs md:text-xl md:font-medium text-white lg:text-2xl lg:font-semibold">
            Web Development
          </button>
          <button className="p-4  cursor-pointer hover:text-primary_colour cs-screen:text-xl cs-screen:font-medium text-xs md:text-xl md:font-medium text-white  lg:text-2xl lg:font-semibold">
            UI & UX Design
          </button>
        </div>
        {/* categorey list name desaign */}

        <div className="grid grid-cols-4 gap-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="lg:col-span-4 col-span-4 group"
          >
            <Image
              className="w-full h-96 rounded-3xl"
              src={project1}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <div className="absolute bottom-6 ml-10 flex gap-4">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  SUMMARY
                </button>
                <Link
                  href={`/project-details/0`}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  DETAILS
                </Link>

                <Link
                  href="https://law-firm-client-render.onrender.com/"
                  type="button"
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour"
                >
                  VISIT
                </Link>
              </div>
            </div>

            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              Law Firm Management System
            </h2>
          </div>

          <div data-aos="fade-right" className="lg:col-span-2 col-span-4 group">
            <Image
              className="w-full h-96 rounded-3xl"
              src={project2}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <div className="absolute bottom-6 ml-10 flex gap-4 cs-screen-second:flex cs-screen-second:flex-col-reverse cs-screen:flex-col-reverse">
                {/* <button
                  type="button"
                  onClick={() => openModal()}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  SUMMARY
                </button> */}
                <Link
                  href={`/project-details/1`}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  DETAILS
                </Link>

                <Link
                  href="https://rent-ncar-client.onrender.com/"
                  type="button"
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour"
                >
                  VISIT
                </Link>
              </div>
            </div>
            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              Car rental service system
            </h2>
          </div>

          <div data-aos="fade-left" className="lg:col-span-2 col-span-4 group">
            <Image
              className="w-full h-96 rounded-3xl"
              src={project3}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <div className="absolute bottom-6 md:ml-10 lg:flex gap-4 ml-2 cs-screen-second:flex cs-screen-second:flex-col-reverse cs-screen:flex-col-reverse">
                {/* <button
                  type="button"
                  onClick={() => openModal()}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  SUMMARY
                </button> */}
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour "
                >
                  DETAILS
                </button>

                <Link
                  href="https://iq-cosmos-frontned.onrender.com/"
                  type="button"
                  className="bg-[#000] text-white  text-center text-xl hover:text-primary_colour border outline outline-2 py-2 px-5 rounded-3xl transition-colors duration-300 group-hover:outline-primary_colour"
                >
                  VISIT
                </Link>
              </div>
            </div>
            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              IQ Test Exam
            </h2>
          </div>
        </div>
      </div>

      {/*   modal work */}

      <PortfolioDetailsComponent
        isOpen={isModalOpen}
        onClose={closeModal}
      ></PortfolioDetailsComponent>
    </div>
  );
};

export default PortfolioComponent;
