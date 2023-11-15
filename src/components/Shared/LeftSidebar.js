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
          <h2 className="text-3xl font-bold font-serif text-white ">
            IMRAN HOSSAIN
          </h2>
          <h4 className="text-md font-serif font-medium text-white text-right">
            FULL-STACK <br /> DEVELOPER
          </h4>
        </div>
      </div>
      <div className="w-full  items-center justify-center mt-4">
        <Image
          className="w-full h-96 items-center justify-center rounded-xl "
          src={profile}
          alt="profile-image"
        ></Image>
      </div>
      <div className="">
        <h2 className="text-2xl font-serif font-medium text-white text-center mt-6">
          mdimranhossain122@gmail.com
        </h2>
        <h3 className="text-xl font-serif font-medium text-white text-center mt-3">
          uttara,Dhaka,Bangladesh
        </h3>
        <p className="text-sm font-serif font-medium text-white text-center mt-3">
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
        <div className="hover:border text-center text-xl font-normal items-center hover:border-primary_colour mt-4 hover:bg-[#212529] bg-primary_colour w-full rounded-3xl hover:text-white ">
          <button type="buton" className="p-4   ">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
