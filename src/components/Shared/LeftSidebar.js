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
    <div className="p-8 flex flex-col">
      <div className="items-center w-full">
        <div className="flex justify-between items-center">
          <h2 className="lg:text-3xl sm:text-2xl font-bold font-serif text-white ">
            IMRAN HOSSAIN
          </h2>
          <h4 className="lg:text-lg sm:text-xs text-xs font-serif font-medium text-white text-right">
            FULL-STACK <br /> DEVELOPER
          </h4>
        </div>
      </div>
      <div className="w-full  mt-4">
        <Image
          className="w-full h-72 items-center justify-center rounded-xl "
          src={profile}
          alt="profile-image"
        ></Image>
      </div>
      <div className="">
        <h2 className="lg:text-2xl sm:text-lg font-serif font-medium text-white text-center mt-6">
          mdimranhossain122@gmail.com
        </h2>
        <h3 className="lg:text-xl sm:text-sm font-serif font-medium text-white text-center mt-3">
          Whatsapp: +8801682765544
        </h3>
        <h3 className="lg:text-xl sm:text-sm font-serif font-medium text-white text-center ">
          uttara, Dhaka, Bangladesh
        </h3>
        <p className="lg:text-sm sm:text-xs font-serif font-medium text-white text-center mt-1">
          @ 2023 IMRAN. All Rights Reserved
        </p>
      </div>
      {/*  icon-design css calss is a resuable css it is in global css */}
      <div className="mt-12">
        <div className="flex flex-row gap-3 items-center justify-center">
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

        <button className="mt-4 group relative p-4 overflow-hidden rounded-3xl bg-white text-xl shadow w-full ">
          <div className="absolute inset-0 w-3 bg-primary_colour transition-all duration-[250ms] ease-out group-hover:w-full "></div>
          <span className="relative text-black group-hover:text-white text-center ">
            HIRE ME!
          </span>
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
