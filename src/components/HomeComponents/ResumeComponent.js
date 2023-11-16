import { FaFileWord } from "react-icons/fa6";
const ResumeComponent = () => {
  return (
    <div>
      <div className="middle-body-buton mt-28">
        <FaFileWord />
        <h4>RESUME</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3 className="middle-body-title">
          Education & <span className="text-primary_colour">Experience ✨</span>
        </h3>
        <div className="mt-10 relative">
          <div className="mt-10 side-desing-resume">
            <h5 className="text-white text-xl font-custom_intro_font">
              2022 - Present
            </h5>

            <h3 className="text-white text-2xl font-custom_intro_font mt-5">
              Gorgeous Bangladesh LTD.
            </h3>
            <h2 className="text-text_colour font-light">
              Full-Stack Developer
            </h2>
          </div>
          <div className="mt-10 side-desing-resume2nd">
            <h5 className="text-white text-xl font-custom_intro_font">
              2020 - Present
            </h5>

            <h3 className="text-white text-2xl font-custom_intro_font mt-5">
              Freelancher
            </h3>
            <h2 className="text-text_colour font-light">
              Full-Stack Developer
            </h2>
          </div>
          <div className="mt-10 side-desing-resume3rd">
            <h5 className="text-white text-xl font-custom_intro_font">
              2015 - 220
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
  );
};

export default ResumeComponent;
