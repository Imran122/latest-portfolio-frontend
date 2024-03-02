import { useRouter } from "next/router";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import projectsData from "../../assets/projectsList.json";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    {/* Your custom previous arrow content or icon */}
    <FaArrowAltCircleLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    {/* Your custom next arrow content or icon */}
    <FaArrowAltCircleRight />
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

  const router = useRouter();

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
        {projectsData[router?.query?.slug]?.map((project, index) => (
          <div key={index}>
            <div className="flex-auto w-full mb-12">
              <img
                className="w-full h-full"
                width="0"
                height="0"
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
