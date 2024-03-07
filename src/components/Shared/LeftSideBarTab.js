import Image from "next/image";
import {
  FaGithubSquare,
  FaHackerrank,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import profile from "../../assets/images/profileimg/profile2.jpg";
export default function LeftSideBarTab() {
  return (
    <div className="border border-secondary_colour mt-10 py-4">
      <div className="flex text-center ">
        <div className=" w-full">
          <div className="flex flex-col ">
            <h2 className="text-4xl  font-bold font-serif text-white ">
              IMRAN HOSSAIN
            </h2>
            <h4 className="text-lg  font-serif font-medium text-white">
              FULL-STACK DEVELOPER
            </h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-8">
        <div className="col-span-3 w-full flex items-center justify-start px-4">
          <Image
            className="w-full h-60 items-center justify-center rounded-xl "
            src={profile}
            alt="profile-image"
          ></Image>
        </div>
        <div className="col-span-4 flex flex-col flex-wrap  items-start">
          <h2 className="text-xl cs-screen:text-[12px]  font-serif font-medium text-white text-center mt-6">
            mdimranhossain122@gmail.com
          </h2>
          <h3 className="text-xl  cs-screen:text-[12px] font-serif font-medium text-white text-center mt-3">
            Whatsapp: +8801682765544
          </h3>
          <h3 className="text-xl  cs-screen:text-[12px] font-serif font-medium text-white text-center ">
            uttara, Dhaka, Bangladesh
          </h3>
          <p className="text-sm  cs-screen:text-[12px] font-serif font-medium text-white text-center mt-1">
            @ 2024 IMRAN. All Rights Reserved
          </p>
          <div className="flex flex-row flex-wrap gap-3 items-center justify-center py-4">
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
          {/*  button design */}
          <button className="mt-4 mb-4  group relative p-4 overflow-hidden rounded-3xl bg-white text-xl shadow w-2/3 focus:outline-none">
            <div className="absolute inset-0 w-3 bg-primary_colour transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white text-center">
              HIRE ME!
            </span>
            {/* Outline Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary_colour pointer-events-none"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
