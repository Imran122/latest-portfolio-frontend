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
      <Link href="#" className="icon-design-right">
        <IoHome />
      </Link>
      <Link href="#" className="icon-design-right">
        <BsPersonCircle />
      </Link>
      <Link href="#" className="icon-design-right">
        <FaFileWord />
      </Link>
      <Link href="#" className="icon-design-right">
        <FaHandshake />
      </Link>
      <Link href="#" className="icon-design-right">
        <GiSkills />
      </Link>
      <Link href="#" className="icon-design-right">
        <MdWorkHistory />
      </Link>
      <Link href="#" className="icon-design-right">
        <BiSolidMessageAltDetail />
      </Link>
      <Link href="#" className="icon-design-right">
        <SiGooglemessages />
      </Link>
    </div>
  );
};

export default RightSidebar;
