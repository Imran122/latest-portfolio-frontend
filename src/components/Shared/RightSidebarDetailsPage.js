import Link from "next/link";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";

const RightSidebarDetailsPage = () => {

  return (
    <div className="flex flex-col gap-3 items-center justify-center animate-spin-slow">
      <Link
        href="/"
        className="text-text_colour text-3xl border border-primary_colour p-5 rounded-full hover:border hover:border-primary_colour hover:text-primary_colour"
      >
        <IoHome />
        <div className="absolute right-full top-14 mr-2 -translate-y-1/2 whitespace-nowrap  py-1.5 px-3.5 text-2xl text-text_colour opacity-0 group-hover:opacity-100 bg-[#404042]">Home</div>
      </Link>
  
    </div>
  );
};

export default RightSidebarDetailsPage;
