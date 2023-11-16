import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import projectimg from "../../assets/images/middle/round-text.png";
const IntroductionComponent = () => {
  return (
    <div>
      {/*  body button */}
      <div className="middle-body-buton">
        <IoHome />
        <h4>INTRUDUCE</h4>
      </div>

      {/*    introduction text design */}
      <div className="flex flex-col ">
        <div className="mt-16 ">
          <h2 className="md:text-7xl text-4xl uppercase font-custom-intro-font text-white font-normal leading-normal ">
            Hi, I AM{" "}
            <span className="text-primary_colour font-custom_name_font font-bold ">
              IMRAN HOSSAIN
            </span>
            ,
            <br /> Full-stack developer
          </h2>
          <p className="text-text_colour font-sans text-xl lg:w-1/2 mt-4">
            A dedicated Full Stack Developer with passionate about interactive
            and visually appealing user interfaces who will deliver dynamic and
            high-performance web applications that meet your specific
            requirements.
          </p>
        </div>
        {/*     project image rortaing deisgn */}
        <div className="mt-24 relative text-center">
          <div className="flex items-center justify-end">
            {" "}
            {/* Use justify-end to align to the right */}
            <Image
              className="animate-spin-slow"
              src={projectimg}
              alt="project-image"
            />
            <span className="absolute top-1/2  right-[30px] transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
              <FaArrowDown />
            </span>
          </div>
        </div>

        <div className="uppercase flex mt-4 gap-36">
          <div className=" flex items-start flex-col">
            <h2 className="text-primary_colour text-6xl">
              3
              <span className="text-primary_colour text-3xl ">
                <AiOutlinePlus />
              </span>
            </h2>
            <p className="text-text_colour">YEARS OF EXPERIENCE</p>
          </div>
          <div className=" flex items-start flex-col">
            <h2 className="text-primary_colour text-6xl">
              13
              <span className="text-primary_colour text-3xl ">
                <AiOutlinePlus />
              </span>
            </h2>
            <p className="text-text_colour">project worked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionComponent;
