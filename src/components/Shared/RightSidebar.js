import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";

const RightSidebar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const resumeSection = document.getElementById("resume");
      const serviceSection = document.getElementById("service");
      const skillsSection = document.getElementById("skills");
      const portfolioSection = document.getElementById("portfolio");
      const contactlioSection = document.getElementById("contact");

      const isInViewport = (element, offsetPercentage = 0.4) => {
        const rect = element.getBoundingClientRect();
        const offset = rect.height * offsetPercentage;

        return (
          rect.top >= -offset &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) +
              offset
        );
      };

      if (isInViewport(homeSection)) {
        setActiveNavItem("home");
      } else if (isInViewport(aboutSection)) {
        setActiveNavItem("about");
      } else if (isInViewport(resumeSection)) {
        setActiveNavItem("resume");
      } else if (isInViewport(serviceSection)) {
        setActiveNavItem("service");
      } else if (isInViewport(skillsSection)) {
        setActiveNavItem("skills");
      } else if (isInViewport(portfolioSection)) {
        setActiveNavItem("portfolio");
      } else if (isInViewport(contactlioSection)) {
        setActiveNavItem("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center justify-center ">
      <a
        href="#home"
        className={
          activeNavItem === "home"
            ? "active icon-design-right  group relative inline-block scroll-smooth"
            : "icon-design-right  group relative inline-block scroll-smooth"
        }
      >
        <IoHome />
        <div className="icon-design-right-for-hover">Home</div>
      </a>
      <a
        href="#about"
        className={
          activeNavItem === "about"
            ? "active icon-design-right  group relative inline-block scroll-smooth"
            : "icon-design-right  group relative inline-block scroll-smooth"
        }
      >
        <BsPersonCircle />
        <div className="icon-design-right-for-hover">About</div>
      </a>
      <a
        href="#resume"
        className={
          activeNavItem === "resume"
            ? "active icon-design-right  group relative inline-block scroll-smooth"
            : "icon-design-right  group relative inline-block scroll-smooth"
        }
      >
        <FaFileWord />
        <div className="icon-design-right-for-hover">Resume</div>
      </a>
      <a
        href="#service"
        className={
          activeNavItem === "service"
            ? "active icon-design-right  group relative inline-block"
            : "icon-design-right  group relative inline-block"
        }
      >
        <FaHandshake />
        <div className="icon-design-right-for-hover">Service</div>
      </a>
      <a
        href="#skills"
        className={
          activeNavItem === "skills"
            ? "active icon-design-right  group relative inline-block"
            : "icon-design-right  group relative inline-block"
        }
      >
        <GiSkills />
        <div className="icon-design-right-for-hover">Skills</div>
      </a>
      <a
        href="#portfolio"
        className={
          activeNavItem === "portfolio"
            ? "active icon-design-right  group relative inline-block"
            : "icon-design-right  group relative inline-block"
        }
      >
        <MdWorkHistory />
        <div className="icon-design-right-for-hover">Portfolio</div>
      </a>
      {/*  <a href="#" className="icon-design-right group relative inline-block">
        <BiSolidMessageAltDetail />
        <div className="icon-design-right-for-hover">Testimonial</div>
      </a> */}
      <a
        href="#contact"
        className={
          activeNavItem === "contact"
            ? "active icon-design-right  group relative inline-block"
            : "icon-design-right  group relative inline-block"
        }
      >
        <SiGooglemessages />
        <div className="icon-design-right-for-hover">Contact</div>
      </a>
    </div>
  );
};

export default RightSidebar;
