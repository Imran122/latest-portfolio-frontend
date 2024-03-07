import "aos/dist/aos.css";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
const ResumeComponent = () => {
  return (
    <div id="resume">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex gap-4  mt-14 justify-start items-center"
      >
        <div className="middle-body-buton ">
          <h4 className="flex gap-2 justify-center items-center">
            <FaFileWord />
            RESUME
          </h4>
        </div>
        <Link
          href="https://drive.google.com/file/d/1YVRqzwKKr2OR0H1PcVscF75fmbGreWUh/view"
          className="text-4xl text-primary_colour"
          target="_blank"
        >
          <FaDownload />
        </Link>
      </div>
      <div className="mt-16 mb-4">
        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="middle-body-title"
        >
          Education & <span className="text-primary_colour">Experience ✨</span>
        </h3>
        <div className="mt-10 relative lg:ml-7 ml-9">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="group"
          >
            <div className="mt-10 side-desing-resume ">
              <h5 className="text-white flex gap-2 items-center text-xl font-custom_intro_font transition-colors duration-300 group-hover:text-primary_colour">
                Nov-2022 <MdDoubleArrow /> Present
              </h5>

              <h3 className="text-white text-2xl font-custom_intro_font mt-5">
                Gorgeous Bangladesh LTD.
              </h3>
              <h2 className="text-text_colour font-light">
                Full-Stack Developer
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="35"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="group"
          >
            <div className="mt-10 side-desing-resume2nd">
              <h5 className="text-white flex gap-2 items-center text-xl font-custom_intro_font transition-colors duration-300 group-hover:text-primary_colour">
                April-2022 <MdDoubleArrow /> Present
              </h5>

              <h3 className="text-white text-2xl font-custom_intro_font mt-5">
                Freelancher
              </h3>
              <h2 className="text-text_colour font-light">
                Full-Stack Developer
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="group"
          >
            <div className="mt-10 side-desing-resume3rd">
              <h5 className="text-white flex gap-2 items-center  text-xl font-custom_intro_font transition-colors duration-300 group-hover:text-primary_colour">
                Sep-2015 <MdDoubleArrow /> Dec-2019
              </h5>

              <h3 className="text-white text-2xl font-custom_intro_font mt-5">
                Daffodil International University
              </h3>
              <h2 className="text-text_colour font-light">
                Computer Science & Engineering
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
