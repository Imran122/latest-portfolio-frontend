import { FaFileWord } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
const ResumeComponent = () => {
  return (
    <div id="resume">
      <div className="middle-body-buton mt-28">
        <FaFileWord />
        <h4>RESUME</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3 className="middle-body-title">
          Education & <span className="text-primary_colour">Experience ✨</span>
        </h3>
        <div className="mt-10 relative ml-7">
          <div className="group">
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
          <div className="group">
            <div className="mt-10 side-desing-resume2nd">
              <h5 className="text-white flex gap-2 items-center text-xl font-custom_intro_font transition-colors duration-300 group-hover:text-primary_colour">
                Nov-2020 <MdDoubleArrow /> Present
              </h5>

              <h3 className="text-white text-2xl font-custom_intro_font mt-5">
                Freelancher
              </h3>
              <h2 className="text-text_colour font-light">
                Full-Stack Developer
              </h2>
            </div>
          </div>
          <div className="group">
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
