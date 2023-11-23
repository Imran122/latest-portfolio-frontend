import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import notification from "../../../assets/images/dashboard/notification.png";
import profile from "../../../assets/images/dashboard/userIcon.png";
const DashboardNavbar = ({ open, setOpen, nav, setNav }) => {
  const handleClick = () => {
    setOpen(!open);
    setNav(!nav);
  };
  return (
    <div>
      <div className=" w-full py-5 bg-white sticky top-0 z-10">
        <div className="flex justify-between">
          <div className="flex items-center w-2/4">
            <div className="px-4 flex">
              {/*     onClick={handleClick} */}
              <button onClick={handleClick}>
                <RiMenu4Fill className="text-xl " />
              </button>
            </div>
            {/* search bar */}
            <div className="w-full flex justify-center">
              <div className="flex items-center relative ">
                <input
                  type="text"
                  placeholder="Search Now"
                  className="px-4 py-2 w-36 lg:w-full bg-secondary border border-gray-100 rounded-full focus:outline-none focus:border-gray-300"
                />
                <HiOutlineSearch className="absolute right-3 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* profile details */}
          <div className="flex items-center justify-end space-x-7">
            <button className="hover:bg-secondary">
              <Image src={notification} alt="" />
            </button>
            <button className="flex items-center space-x-2 hover:bg-secondary">
              <Image src={profile} alt="" className="w-10 rounded-full" />
              <h1 className="hidden sm:block">Imran Hossain</h1>
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
