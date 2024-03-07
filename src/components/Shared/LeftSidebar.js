import Image from "next/image";
import {
  FaGithubSquare,
  FaHackerrank,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import profile from "../../assets/images/profileimg/profile2.jpg";
const LeftSidebar = () => {
  return (
    <div className=" flex flex-col text-center p-4 ">
      <div className="items-center w-full">
        <div className="flex flex-col ">
          <h2 className="lg:text-2xl sm:text-xl font-bold font-serif text-white ">
            IMRAN HOSSAIN
          </h2>
          <h4 className="lg:text-lg sm:text-xs text-xs font-serif font-medium text-white">
            FULL-STACK DEVELOPER
          </h4>
        </div>
      </div>
      <div className="w-full  mt-4 flex items-center justify-center">
        <Image
          className="lg:w-full w-[300px] h-60 items-center justify-center rounded-xl "
          src={profile}
          alt="profile-image"
        ></Image>
      </div>
      <div className="flex flex-col flex-wrap text-center">
        <h2 className="lg:text-xl sm:text-lg cs-screen:text-[12px]  font-serif font-medium text-white text-center mt-6">
          mdimranhossain122@gmail.com
        </h2>
        <h3 className="lg:text-xl sm:text-sm cs-screen:text-[12px] font-serif font-medium text-white text-center mt-3">
          Whatsapp: +8801682765544
        </h3>
        <h3 className="lg:text-xl sm:text-sm cs-screen:text-[12px] font-serif font-medium text-white text-center ">
          uttara, Dhaka, Bangladesh
        </h3>
        <p className="lg:text-sm sm:text-xs cs-screen:text-[12px] font-serif font-medium text-white text-center mt-1">
          @ 2023 IMRAN. All Rights Reserved
        </p>
      </div>
      {/*  icon-design css calss is a resuable css it is in global css */}
      <div className="mt-5">
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
          <span className="icon-design">
            <FaLinkedin />
          </span>
          <span className="icon-design">
            <FaGithubSquare />
          </span>
          <span className="icon-design">
            <FaHackerrank />
          </span>
          <span className="icon-design">
            <ImStackoverflow />
          </span>
          <span className="icon-design">
            <FaInstagramSquare />
          </span>
        </div>

        <button className="mt-4 mb-4  group relative p-4 overflow-hidden rounded-3xl bg-white text-xl shadow w-full focus:outline-none">
          <div className="absolute inset-0 w-3 bg-primary_colour transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white text-center">
            HIRE ME!
          </span>
          {/* Outline Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary_colour pointer-events-none"></div>
        </button>

        {/*  <div className="hover:border text-center text-xl font-normal items-center hover:border-primary_colour mt-4 hover:bg-[#212529] bg-primary_colour w-full rounded-3xl hover:text-white ">
          <button type="buton" className="p-4   ">
            HIRE ME
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LeftSidebar;
