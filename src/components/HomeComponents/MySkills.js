import "aos/dist/aos.css";
import Image from "next/image";
import { GiSkills } from "react-icons/gi";
import front5 from "../../assets/images/skillslogo/Tailwind-img.png";
import back7 from "../../assets/images/skillslogo/aws.png";
import front4 from "../../assets/images/skillslogo/bootstrap.png";
import back4 from "../../assets/images/skillslogo/docker.png";
import back3 from "../../assets/images/skillslogo/express.png";
import back8 from "../../assets/images/skillslogo/gcp.png";
import back6 from "../../assets/images/skillslogo/graphql.png";
import back10 from "../../assets/images/skillslogo/javascript.png";
import back9 from "../../assets/images/skillslogo/mongo.png";
import front2 from "../../assets/images/skillslogo/nextjs.png";
import back2 from "../../assets/images/skillslogo/nodejs.png";
import back11 from "../../assets/images/skillslogo/postgresql.png";
import back5 from "../../assets/images/skillslogo/prisma.png";
import front1 from "../../assets/images/skillslogo/react js.png";
import front3 from "../../assets/images/skillslogo/redux.png";
import back1 from "../../assets/images/skillslogo/tpescript.png";

const MySkills = () => {
  return (
    <div id="skills ">
      {/*  service button */}
      <div className="middle-body-buton mt-20">
        <GiSkills />
        <h4>SKILLS</h4>
      </div>

      {/*   skill part design */}
      <div className="mt-14 mb-4 pr-4  ">
        <h3 className="middle-body-title mb-12">
          My <span className="text-primary_colour ">Professional Skills</span>
        </h3>
        {/*   Back-end Tech */}
        <h4 className="text-text_colour text-xl font-sans uppercase mb-8">
          Back-end Tech :--
        </h4>
        <div className="grid lg:grid-cols-8 cs-screen-second:grid-cols-6 cs-screen:grid-cols-5 grid-cols-4 md:grid-cols-6 gap-3">
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div ">
              <Image className="w-8 h-8" src={back10} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">javascript</h2>
            </div>
          </div>

          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back1} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">typescript</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back2} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">Node js</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back3} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">express Js</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back4} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">Docker</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back5} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">prisma</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back6} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">graphql</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back9} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">mongodb</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back11} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">postgresql</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back7} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">aws</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={back8} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">gcp</h2>
            </div>
          </div>
        </div>
        {/*    front end design */}
        <h4 className="text-text_colour text-xl font-sans uppercase mb-8 mt-8">
          front-end Tech :--
        </h4>
        <div className="grid lg:grid-cols-8 cs-screen-second:grid-cols-6 cs-screen:grid-cols-5 grid-cols-4 md:grid-cols-6 gap-3">
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={front1} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">react js</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={front2} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">next js</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={front3} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">Redux</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={front4} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">bootstrap</h2>
            </div>
          </div>
          <div className="group animate-heartbeat ">
            <div className="middle-body-skill-div">
              <Image className="w-8 h-8" src={front5} alt="skillimage"></Image>
              <h2 className="middle-body-skill-h-text">tailwind css</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
