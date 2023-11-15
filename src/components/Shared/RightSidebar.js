import Link from "next/link";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-5">
      <Link href="#" className="icon-design-right  group relative inline-block">
        <IoHome />
        <div className="icon-design-right-for-hover">Home</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <BsPersonCircle />
        <div className="icon-design-right-for-hover">About</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <FaFileWord />
        <div className="icon-design-right-for-hover">Resume</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <FaHandshake />
        <div className="icon-design-right-for-hover">Service</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <GiSkills />
        <div className="icon-design-right-for-hover">Skills</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <MdWorkHistory />
        <div className="icon-design-right-for-hover">Portfolio</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <BiSolidMessageAltDetail />
        <div className="icon-design-right-for-hover">Testimonial</div>
      </Link>
      <Link href="#" className="icon-design-right group relative inline-block">
        <SiGooglemessages />
        <div className="icon-design-right-for-hover">Contact</div>
      </Link>
    </div>
  );
};

export default RightSidebar;
