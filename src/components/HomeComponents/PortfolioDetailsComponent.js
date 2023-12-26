import Image from "next/image";
import { useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import Slider from "react-slick";
import portfolio1 from "../../assets/images/portfolio/template.png";
import portfolio2 from "../../assets/images/portfolio/template2.png";
import portfolio3 from "../../assets/images/portfolio/template3.png";

/* customize the arrow of the slider  */

/* customize the arrow of the slider  */

const PortfolioDetailsComponent = ({ isOpen, onClose }) => {
  const modalClass = isOpen
    ? "fixed z-50  top-1/2 w-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 opacity-100 scale-100 "
    : " opacity-0 absolute top-1/2 w-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50  duration-700";

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
        charSet="UTF-8"
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
                  Law Firm Management System
                </h2>
                <div>
                  <h4 className="text-white lg:text-2xl text-xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Front-End:-
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>React js</li>
                    <li>Bootstrap5</li>
                    <li>Context API</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Front-End
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>javascript</li>
                    <li>Node js</li>
                    <li>Express js</li>
                    <li>Node Mailer</li>
                    <li>Stripe</li>
                  </ul>
                </div>
                <p className="text-white font-sans font-normal mt-4">
                  I am trying to build a law firm system application where there
                  will be 4 roles like Super admin, admin, agent and member.
                  Here super-admin can control everything in the
                  application.Super admin can accept books or reject
                  centent,make paid or free,create edit or delete package or
                  send custom packages to user.Admin has some few features to
                  control users and data.An agent is like a university or a law
                  firm who can buy packages and under the agent all the student
                  or people who will open account can read book or article. A
                  member is like a single user who can read book by buying a
                  package from the application,contribute content,edit,delte
                  etc. Every role can contribuite content but it will not show
                  untli the super admin accpet. * signup and you will get a mail
                  to active account. after activation you can login*
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-light text-text_colour">image 1 of 3</p>
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
                  Law Firm Management System
                </h2>
                <div>
                  <h4 className="text-white lg:text-2xl text-xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    super admin credential:
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>email: shadowvampire11@gmail.com</li>
                    <li>password: 12345678</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Member credential:
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>email: mdimranhossain0066@gmail.com</li>
                    <li>password: 12345678</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Admin credential:
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>email: imranhossain122@gmail.com</li>
                    <li>password: 12345678</li>
                  </ul>
                </div>
                <p className="text-white font-sans font-normal mt-4">
                  super admin can control all the system in application. He can
                  accept or reject new contribution. Super admin can see all the
                  article or books and can delete it is there is anything wrong
                  with the content. He can control user, agent. Super admin can
                  send custom Package and agent will get it and pay it and it is
                  called custom package here. In super admin dashboard home
                  page, he will see a summary of his role. Like he can see
                  earning summary, contribution summary, top performer who
                  contributed book best, recent uploaded books. He can also send
                  message notification for the user.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-light text-text_colour">image 2 of 3</p>
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
                  src={portfolio3}
                  alt="portfolio image"
                ></Image>
              </div>
              <div className="flex-auto w-64  text-left ">
                <h2 className="text-white lg:text-4xl text-2xl font-custom_intro_font font-bold uppercase">
                  Law Firm Management System
                </h2>
                <div>
                  <h4 className="text-white lg:text-2xl text-xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Agent credential:
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>email: mdimranhossain0066@gmail.com</li>
                    <li>password: 12345678</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-custom_subtitle_font font-semibold mt-4 uppercase">
                    Editor credential:
                  </h4>
                  <ul className="list-disc mt-4 text-white">
                    <li>email: imrankhan6554@gmail.com</li>
                    <li>password: 12345678</li>
                  </ul>
                </div>
                <p className="text-white font-sans font-normal mt-4">
                  when a member(user) will login to his dashboard he can see a
                  summary of his account. How many content he contributed,
                  recent uploaded book, notification message from the admin or
                  super admin.Agency is almost same as a member(user). But he
                  has some extra role. An agency means he is a owner or a
                  professor or a owner of an organization and under his agency
                  there are are some students who will get free account to see
                  the content in the website. That user will be normal user and
                  they will be added by the agency user.In the super admin
                  dashboard there is trash system and if super admin send any
                  content into the trash then it will show in the trash page.
                  From the trash page the super admin can delete the data
                  permanently from the database.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-light text-text_colour">image 3 of 3</p>
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
