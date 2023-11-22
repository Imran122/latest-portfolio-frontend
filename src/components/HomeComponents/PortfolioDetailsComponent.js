import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import portfolio2 from "../../assets/images/portfolio/portfolio2.png";
const PortfolioDetailsComponent = ({ isOpen, onClose }) => {
  const modalClass = isOpen
    ? "absolute top-0 w-full left-0 justify-center items-center duration-700 opacity-100 scale-100 "
    : " absolute top-0 opacity-0 scale-50 w-full left-0  justify-center items-center  duration-700";
  return (
    <div className=" flex ">
      <div className={modalClass} id="modal">
        <div className=" ">
          <div className="flex flex-row p-2 gap-4 border-2 border-white-600 bg-[#212529]">
            <div className="flex-auto w-32 ">
              <Image
                className="w-full h-full"
                src={portfolio2}
                alt="portfolio image"
              ></Image>
            </div>
            <div className="flex-auto w-64  text-left ">
              <h2 className="text-white lg:text-4xl text-2xl font-custom_intro_font font-bold uppercase">
                title of the project
              </h2>
              <div>
                <h4 className="text-white lg:text-2xl text-xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                  Front-End
                </h4>
                <ul className="list-disc mt-4 text-white">
                  <li>python</li>
                  <li>javascript</li>
                  <li>javascript</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                  Front-End
                </h4>
                <ul className="list-disc mt-4 text-white">
                  <li>python</li>
                  <li>javascript</li>
                  <li>javascript</li>
                </ul>
              </div>
              <p className="text-white font-sans font-normal mt-4">
                story all about how, my life got flipped-turned upside down And
                like to take a minute just sit right therestory all about how,
                my life got flipped-turned upside down And like to take a minute
                just sit right therestory all about how, my life got
                flipped-turned upside down Andlike to take a minute just sit
                right therestory all about how, my life got flipped-turned
                upside down And like to take a minute just sit right therestory
                all about how, my life got flipped-turned upside down And like
                to take a minute just sit right therestory all about how, my
                life got flipped-turned upside down And like to take a minute
                just sit right therestory all about how, my life got
                flipped-turned upside down And like to take a minute just sit
                right there
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-light text-text_colour">image 1 of 5</p>
            <button onClick={onClose}>
              <span className="font-bold text-white text-4xl">
                <ImCancelCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsComponent;
