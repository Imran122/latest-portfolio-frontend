import Image from "next/image";
import { useState } from "react";
import { MdWorkHistory } from "react-icons/md";
import project1 from "../../assets/images/portfolio/portfolio1.jpg";
import PortfolioDetailsComponent from "./PortfolioDetailsComponent";
const PortfolioComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative">
      {/*  work history portfolio button */}
      <div className="middle-body-buton mt-28">
        <MdWorkHistory />
        <h4>PORTFOLIO</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3 className="middle-body-title mb-10">
          Featured <span className="text-primary_colour"> Projects</span>
        </h3>
        <div className="grid grid-cols-4 gap-8">
          <div className="lg:col-span-4 col-span-4">
            <Image
              className="w-full h-96"
              src={project1}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <button
                type="button"
                onClick={() => openModal()}
                className="bg-[#000] text-white absolute bottom-6 ml-10 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                DETAILSz
              </button>

              <button
                type="button"
                className="bg-[#000] text-white absolute bottom-6 ml-44 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                VISIT
              </button>
            </div>

            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              Car rental service system
            </h2>
          </div>

          <div className="lg:col-span-2 col-span-4">
            <Image
              className="w-full h-96"
              src={project1}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <button
                type="button"
                className="bg-[#000] text-white absolute bottom-6 ml-10 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                DETAILS
              </button>

              <button
                type="button"
                className="bg-[#000] text-white absolute bottom-6 ml-44 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                VISIT
              </button>
            </div>
            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              Car rental service system
            </h2>
          </div>

          <div className="lg:col-span-2 col-span-4">
            <Image
              className="w-full h-96"
              src={project1}
              alt="project image"
            ></Image>
            <div className="flex gap-6 relative">
              <button
                type="button"
                className="bg-[#000] text-white absolute bottom-6 ml-10 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                DETAILS
              </button>

              <button
                type="button"
                className="bg-[#000] text-white absolute bottom-6 ml-44 text-center text-xl hover:text-primary_colour border outline outline-2 p-3 rounded-xl"
              >
                VISIT
              </button>
            </div>
            <h2 className="text-center text-2xl font-custom_subtitle_font text-white mt-3">
              Car rental service system
            </h2>
          </div>
        </div>
      </div>

      {/*   modal work */}
      <button onClick={openModal}>Open Modal</button>
      <PortfolioDetailsComponent
        isOpen={isModalOpen}
        onClose={closeModal}
      ></PortfolioDetailsComponent>
    </div>
  );
};

export default PortfolioComponent;
