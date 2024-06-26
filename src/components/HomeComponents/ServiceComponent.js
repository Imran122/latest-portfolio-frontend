import "aos/dist/aos.css";
import Image from "next/image";
import { FaHandshake, FaHeadSideVirus } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import heroimg from "../../assets/images/bg/top-bg.svg";
import GlowCard from "../helper/glow-card";
const ServiceComponent = () => {
  return (
    <div id="service ">
      {/*  service button */}

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="middle-body-buton mt-28"
      >
        <FaHandshake />
        <h4>SERVICES</h4>
      </div>

      <div className="mt-10 mb-4 pr-3">
        <h3 className="middle-body-title mb-7">
          My <span className="text-primary_colour">Specializations</span>
        </h3>

        {/*  skill design div */}
        <div className="flex flex-col gap-7 relative">
          {/* banner image */}
          <div className="absolute top-0 left-0 w-full ">
            <Image className=" w-full" src={heroimg} alt="image" />
          </div>
          {/* banner image */}
          <GlowCard identifier="1">
            <div className="group flex gap-10 justify-between mt-10 items-center rounded-xl px-10 pb-9">
              <div className="flex flex-col">
                <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour ">
                  Front-End Development
                </h2>
                <p className="text-base text-text_colour text-justify font-sans mt-2">
                  I specialize in Front-End Design & Development with expertise
                  in Next.js, React.js, Redux, Bootstrap, Tailwind CSS. My
                  passion lies in crafting seamless and responsive web
                  applications, with state management using Redux, ensuring
                  optimal performance. Proficient in collaborative development
                  workflows, I bring a solid foundation in Agile methodologies
                  and continuously stay updated on industry trends.
                </p>
                <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                  14+ projects
                </h3>
              </div>
              <div className="cs-screen:ml-6">
                <span className="text-primary_colour text-4xl ">
                  <SiWebmoney />
                </span>
              </div>
            </div>
          </GlowCard>
          {/*  next div */}
          <GlowCard identifier="2">
            <div className="group flex gap-10 justify-between mt-10 items-center rounded-xl px-10 pb-9">
              <div className="flex flex-col ">
                <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour">
                  Full-Stack Development
                </h2>
                <p className="text-base text-justify text-text_colour font-sans mt-2">
                  I specialize in Full-Stack Development, bringing expertise in
                  Node.js, Express.js,MongoDB,PostgreSQL and a range of tools
                  like Stripe, Mailgun, SendGrid, and Google Cloud. Also Have
                  proficiency in react js, next js, redux with user-centric
                  front-end interfaces. With a track record of building robust
                  web applications, I offer a comprehensive skill set that
                  ensures end-to-end development excellence.
                </p>
                <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                  10+ projects
                </h3>
              </div>
              <div className="cs-screen:ml-6">
                <span className="text-primary_colour text-4xl ">
                  <FaHeadSideVirus />
                </span>
              </div>
            </div>
          </GlowCard>
          {/*  next div */}
          {/*     <GlowCard identifier="3">
            <div className="group flex justify-between mt-5 items-center rounded-xl p-10 ">
              <div className="flex flex-col mt-5 ">
                <h2 className="text-4xl font-custom_subtitle_font text-white transition-colors duration-300 group-hover:text-primary_colour">
                  UI/UX Design
                </h2>
                <p className="text-base text-text_colour font-sans mt-1">
                  I created digital products with unique ideas use Figma &
                  Framer
                </p>
                <h3 className="text-white text-xl mt-4 transition-colors duration-300 group-hover:text-primary_colour">
                  2 projects
                </h3>
              </div>
              <div className="cs-screen:ml-6">
                <span className="text-primary_colour text-4xl ">
                  <FaHeadSideVirus />
                </span>
              </div>
            </div>
          </GlowCard> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
