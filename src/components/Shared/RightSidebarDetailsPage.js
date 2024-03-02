import Image from "next/image";
import reactjs from "../../assets/images/skillslogo/react js.png";
import skillsimage from "../../assets/skillLogo.json";
const RightSidebarDetailsPage = () => {
  return (
    <div className=" ">
      {/* <div className="flex flex-col gap-3 items-center justify-center animate-spin-slow">
        <Link
          href="/"
          className="text-text_colour text-3xl border border-primary_colour p-5 rounded-full hover:border hover:border-primary_colour hover:text-primary_colour"
        >
          <IoHome />
          <div className="absolute right-full top-14 mr-2 -translate-y-1/2 whitespace-nowrap  py-1.5 px-3.5 text-2xl text-text_colour opacity-0 group-hover:opacity-100 bg-[#404042]">
            Home
          </div>
        </Link>
      </div> */}

      <div>
        <h3 className="text-purple-400 font-semibold mt-3 text-center uppercase">
          Tech Used
        </h3>
        <h3 className="text-white font-semibold my-3">Front-End:-</h3>
        <div className="flex flex-wrap gap-2">
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[13].name === "Redux" ? skillsimage[13].picture : ""
              }
              alt="techimg"
            />
          </div>
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[1].name === "Bootstrap"
                  ? skillsimage[1].picture
                  : ""
              }
              alt="techimg"
            />
          </div>
          <div className="details-page-icon-design">
            <Image className="w-6 h-6" src={reactjs} alt="techimg" />
          </div>
          <div className="details-page-icon-design">
            <Image className="w-6 h-6" src={reactjs} alt="techimg" />
          </div>
          {/* <div className="details-page-icon-design">
            <Image className="w-6 h-6" src={reactjs} alt="techimg" />
          </div> */}
        </div>
        <h3 className="text-white font-semibold my-3">Back-End:-</h3>
        <div className="flex flex-wrap gap-2">
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[3].name === "Express js"
                  ? skillsimage[3].picture
                  : ""
              }
              alt="techimg"
            />
          </div>
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[4].name === "Google CLoud"
                  ? skillsimage[4].picture
                  : ""
              }
              alt="techimg"
            />
          </div>
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[7].name === "MongoDB" ? skillsimage[7].picture : ""
              }
              alt="techimg"
            />
          </div>
          <div className="details-page-icon-design">
            <img
              className="w-6 h-6"
              src={
                skillsimage[9].name === "Node Js" ? skillsimage[9].picture : ""
              }
              alt="techimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebarDetailsPage;
