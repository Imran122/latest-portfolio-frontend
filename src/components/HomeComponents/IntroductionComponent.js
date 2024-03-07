import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import projectimg from "../../assets/images/middle/round-text.png";
const IntroductionComponent = () => {
  useEffect(() => {
    Aos.init({
      duration: 700, // Animation duration (in milliseconds)
      delay: 300, // Delay between elements animations (in milliseconds)
      offset: 400, // Offset (in pixels) from the original trigger point
    });
  }, []);
  const [activeNavItem, setActiveNavItem] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const portfolioSection = document.getElementById("portfolio");

        const isInViewport = (element, offsetPercentage = 0.4) => {
          const rect = element?.getBoundingClientRect();
          const offset = rect?.height * offsetPercentage;

          return (
            rect?.top >= -offset &&
            rect?.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) +
                offset
          );
        };

        if (isInViewport(portfolioSection)) {
          setActiveNavItem("portfolio");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div id="home">
      {/*  body button */}
      <div className="middle-body-buton">
        <IoHome />
        <h4>INTRUDUCE</h4>
      </div>

      {/*    introduction text design */}
      <div className="flex flex-col pr-3">
        <div className="mt-16 ">
          <h2 className="md:text-5xl text-4xl uppercase font-custom-intro-font text-white font-normal leading-normal ">
            Hi, I AM{" "}
            <span
              data-aos="fade-down"
              className="text-primary_colour font-custom_name_font font-bold "
            >
              IMRAN HOSSAIN ,
            </span>
            <br /> Full-stack developer
          </h2>
          <p className="text-text_colour text-justify font-sans text-lg lg:w-1/2 mt-4 mb-4 tracking-normal">
            A dedicated Full Stack Developer with passionate about interactive
            and visually appealing user interfaces who will deliver dynamic and
            high-performance web applications that meet your specific
            requirements.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:justify-evenly items-center">
          <div className="uppercase flex mt-4 gap-36 ">
            <div className=" flex items-start flex-col">
              <h2 className="text-primary_colour text-4xl">
                1.6
                <span className="text-primary_colour text-3xl ">
                  <AiOutlinePlus />
                </span>
              </h2>
              <p className="text-text_colour">YEARS OF EXPERIENCE</p>
            </div>
            <div className=" flex items-start flex-col">
              <h2 className="text-primary_colour text-4xl">
                10
                <span className="text-primary_colour text-3xl ">
                  <AiOutlinePlus />
                </span>
              </h2>
              <p className="text-text_colour">project worked</p>
            </div>
          </div>
          {/*     project image rortaing deisgn */}
          <div className="relative text-center mr-3">
            <div className="flex ">
              {" "}
              {/* Use justify-end to align to the right */}
              <Image
                className="animate-spin-slow"
                src={projectimg}
                alt="project-image"
              />
              <span className="absolute top-1/2  right-[30px] transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
                <a href="#portfolio">
                  <FaArrowDown />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionComponent;
