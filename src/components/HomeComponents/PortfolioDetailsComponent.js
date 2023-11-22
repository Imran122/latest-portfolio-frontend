import Image from "next/image";
import { useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import Slider from "react-slick";
import portfolio1 from "../../assets/images/portfolio/portfolio1.jpg";
import portfolio2 from "../../assets/images/portfolio/portfolio2.png";

/* customize the arrow of the slider  */

/* customize the arrow of the slider  */

const PortfolioDetailsComponent = ({ isOpen, onClose }) => {
  const modalClass = isOpen
    ? "absolute z-50  top-0 w-full left-0 justify-center items-center duration-700 opacity-100 scale-100 "
    : " absolute top-0 opacity-0 scale-50 w-full left-0  justify-center items-center  duration-700";

  useEffect(() => {
    // Add a class to the body when the modal is open
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  //slide show
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" flex ">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <div className={modalClass} id="modal">
        <Slider {...settings}>
          <div className=" ">
            <div className="flex flex-row p-2 gap-4 border-2 border-white-600 bg-[#212529]">
              <div className="flex-auto w-32 ">
                <Image
                  className="w-full h-full"
                  src={portfolio1}
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
                  story all about how, my life got flipped-turned upside down
                  And like to take a minute just sit right therestory all about
                  how, my life got flipped-turned upside down And like to take a
                  minute just sit right therestory all about how, my life got
                  flipped-turned upside down Andlike to take a minute just sit
                  right therestory all about how, my life got flipped-turned
                  upside down And like to take a minute just sit right
                  therestory all about how, my life got flipped-turned upside
                  down And like to take a minute just sit right therestory all
                  about how, my life got flipped-turned upside down And like to
                  take a minute just sit right therestory all about how, my life
                  got flipped-turned upside down And like to take a minute just
                  sit right there
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
          <div className="">
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
                  story all about how, my life got flipped-turned upside down
                  And like to take a minute just sit right therestory all about
                  how, my life got flipped-turned upside down And like to take a
                  minute just sit right therestory all about how, my life got
                  flipped-turned upside down Andlike to take a minute just sit
                  right therestory all about how, my life got flipped-turned
                  upside down And like to take a minute just sit right
                  therestory all about how, my life got flipped-turned upside
                  down And like to take a minute just sit right therestory all
                  about how, my life got flipped-turned upside down And like to
                  take a minute just sit right therestory all about how, my life
                  got flipped-turned upside down And like to take a minute just
                  sit right there
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
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioDetailsComponent;
