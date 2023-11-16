import { CgWebsite } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa";
const ServiceComponent = () => {
  return (
    <div>
      {/*  service button */}
      <div className="middle-body-buton mt-28">
        <FaHandshake />
        <h4>SERVICES</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3 className="middle-body-title">
          My <span className="text-primary_colour">Specializations</span>
        </h3>

        {/*  skill design div */}
        <div>
          <div className="flex justify-between mt-10 items-center rounded-xl p-10 border border-text_colour hover:border-primary_colour">
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white">
                Website Design
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I created digital products with unique ideas use Figma & Framer
              </p>
              <h3 className="text-white text-xl mt-4">24 projects</h3>
            </div>
            <div>
              <span className="text-primary_colour text-4xl ">
                <CgWebsite />
              </span>
            </div>
          </div>
          {/*  next div */}
          <div className="flex justify-between mt-2 items-center rounded-xl p-10 border border-text_colour hover:border-primary_colour">
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white">
                Website Development
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I created digital products with unique ideas use Figma & Framer
              </p>
              <h3 className="text-white text-xl mt-4">24 projects</h3>
            </div>
            <div>
              <span className="text-primary_colour text-4xl ">
                <CgWebsite />
              </span>
            </div>
          </div>
          {/*  next div */}
          <div className="flex justify-between mt-2 items-center rounded-xl p-10 border border-text_colour hover:border-primary_colour">
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white">
                UI/UX Design
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I created digital products with unique ideas use Figma & Framer
              </p>
              <h3 className="text-white text-xl mt-4">24 projects</h3>
            </div>
            <div>
              <span className="text-primary_colour text-4xl ">
                <CgWebsite />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
