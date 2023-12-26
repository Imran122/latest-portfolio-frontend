import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import portfolio1 from "../../assets/images/portfolio/portfolio1.jpg";
import portfolio2 from "../../assets/images/portfolio/template2.png";
import portfolio3 from "../../assets/images/portfolio/template3.png";
import { ImCancelCircle } from "react-icons/im";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    {/* Your custom previous arrow content or icon */}
    <FaArrowAltCircleLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    {/* Your custom next arrow content or icon */}
    <FaArrowAltCircleRight/>
  </div>
);

const ProjectDetailsComponentPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const projects = [
    {
      image: portfolio1,
      title: "Law Firm Management System",
      frontend: ["React js", "Bootstrap5", "Context API"],
      backend: ["javascript", "Node js", "Express js", "Node Mailer", "Stripe"],
      description:
        "I am trying to build a law firm system application where there will be 4 roles like Super admin, admin, agent, and member. Here super-admin can control everything in the application...",
    },
    {
      image: portfolio2,
      title: "Law Firm Management System2",
      frontend: ["React js", "Bootstrap5", "Context API"],
      backend: ["javascript", "Node js", "Express js", "Node Mailer", "Stripe"],
      description:
        "content of a web page is loaded. Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.",
    },
    // Add other projects with their respective details
  ];

  return (
    <div className="bg-[#212529] ">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex-auto w-full mb-12">
              <Image
                className="w-full h-full"
                src={project.image}
                alt={`portfolio image ${index + 1}`}
              />
            </div>
            <div className="flex-auto w-full  text-left ">
              <h2 className="text-white lg:text-4xl text-2xl font-custom_intro_font font-bold uppercase">
                {project.title}
              </h2>
              <div>
                <h4 className="text-white lg:text-2xl text-xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                  Front-End:-
                </h4>
                <ul className="list-disc mt-4 text-white">
                  {project.frontend.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                  Back-End:-
                </h4>
                <ul className="list-disc mt-4 text-white">
                  {project.backend.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <p className="text-white font-sans font-normal mt-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectDetailsComponentPage;
