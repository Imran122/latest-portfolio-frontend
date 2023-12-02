import "aos/dist/aos.css";
import { FaHandshake, FaHeadSideVirus } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiWebmoney } from "react-icons/si";
const ServiceComponent = () => {
  return (
    <div id="service">
      {/*  service button */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="middle-body-buton mt-28"
      >
        <FaHandshake />
        <h4>SERVICES</h4>
      </div>

      <div className="mt-16 mb-4">
        <h3 className="middle-body-title">
          My <span className="text-primary_colour">Specializations</span>
        </h3>

        {/*  skill design div */}
        <div>
          <div className="flex justify-between mt-10 items-center rounded-xl p-10 border border-text_colour group hover:border-primary_colour">
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour">
                Front-End Design & Development
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I specialize in Front-End Design & Development with expertise in
                Next.js, React.js, Redux, Bootstrap, Tailwind CSS. My passion
                lies in crafting seamless and responsive web applications, with
                state management using Redux, ensuring optimal performance.
                Proficient in collaborative development workflows, I bring a
                solid foundation in Agile methodologies and continuously stay
                updated on industry trends.
              </p>
              <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                10+ projects
              </h3>
            </div>
            <div className="cs-screen:ml-6">
              <span className="text-primary_colour text-4xl ">
                <SiWebmoney />
              </span>
            </div>
          </div>
          {/*  next div */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="group flex justify-between mt-2 items-center rounded-xl p-10 border border-text_colour hover:border-primary_colour"
          >
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour">
                Full-Stack Development
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I specialize in Full-Stack Development, bringing expertise in
                Node.js, Express.js,MongoDB,PostgreSQL and a range of tools like
                Stripe, Mailgun, SendGrid, and Google Cloud. My proficiency
                extends from server-side development to crafting dynamic,
                user-centric front-end interfaces. With a track record of
                building robust web applications, I offer a comprehensive skill
                set that ensures end-to-end development excellence.
              </p>
              <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                7+ projects
              </h3>
            </div>
            <div className="cs-screen:ml-6">
              <span className="text-primary_colour text-4xl ">
                <FaHeadSideVirus />
              </span>
            </div>
          </div>
          {/*  next div */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="group flex justify-between mt-2 items-center rounded-xl p-10 border border-text_colour hover:border-primary_colour"
          >
            <div className="flex flex-col mt-5 ">
              <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour">
                UI/UX Design
              </h2>
              <p className="text-base text-text_colour font-sans mt-1">
                I created digital products with unique ideas use Figma & Framer
              </p>
              <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                2 projects
              </h3>
            </div>
            <div className="cs-screen:ml-6">
              <span className="text-primary_colour text-4xl ">
                <FiFigma />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
