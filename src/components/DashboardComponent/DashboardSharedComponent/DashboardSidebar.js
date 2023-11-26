import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import customer from "../../../assets/images/dashboard/accounts.png";
import dashboard from "../../../assets/images/dashboard/dashboard.png";
import logo from "../../../assets/images/dashboard/logo.png";
import supplier from "../../../assets/images/dashboard/supplier.png";
import { default as userIcon } from "../../../assets/images/dashboard/userIcon.png";
const DashboardSidebar = ({ children, open, setOpen, nav, setNav }) => {
  const [toggle, setToggle] = useState(true);
  const toggleAddCustomer = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className=" bg-white sticky top-0 z-50">
        {/* for large device */}
        <div
          className={`${
            open ? "w-[70px]" : "w-[300px]"
          } duration-300 lg:block h-screen overflow-y-auto hidden example`}
        >
          {!open && (
            <div className=" ">
              <div className="ml-4">
                <Link href="/">
                  <Image src={logo} alt="" className="" />
                </Link>
              </div>

              <div className="flex items-center space-x-1 mt-4 ml-4">
                <div>
                  <Image width={50} src={userIcon} alt="" />
                </div>
                <div className="text-sm">
                  <h1 className="font-semibold">admin user</h1>
                  <h1>admin@gmail.com</h1>
                </div>
              </div>
            </div>
          )}
          {!open && <hr className="w-full mt-3 mb-4" />}
          {/* links */}
          <div
            className={`${
              open ? "grid justify-center mr-2" : "bg-white grid ml-5"
            }`}
          >
            <Link href="/dashboard">
              <h1 className="flex items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3 ">
                <Image src={dashboard} alt="" />
                {!open && <span className="ml-2"> Dashboard</span>}
              </h1>
            </Link>

            <div>
              <div
                onClick={toggleAddCustomer}
                className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3 cursor-pointer"
              >
                <h1 className="flex items-center">
                  <Image src={customer} alt="" />
                  {!open && <span className="ml-2"> Products</span>}
                </h1>
                {!open && (
                  <MdOutlineNavigateNext
                    className={`mr-2 text-xl ${
                      !toggle ? "rotate-90 duration-300" : "duration-300"
                    }`}
                  />
                )}
              </div>
              <div
                className={`${!open ? "ml-5" : "ml-2"} ${
                  toggle ? "hidden duration-300" : " duration-300"
                }`}
              >
                <Link
                  href="/addproduct"
                  className="p-3 flex items-center hover:bg-secondary hover:text-secondary rounded-l-full"
                >
                  <AiOutlinePlus className="mr-2" />
                  {!open && <span className="ml-2">Add product</span>}
                </Link>
                <Link
                  className="p-3 flex items-center hover:bg-secondary hover:text-secondary rounded-l-full"
                  href="/products"
                >
                  <BsCardList className="mr-2" />
                  {!open && <span className="ml-2"> Product List</span>}
                </Link>
              </div>
            </div>

            <Link
              href="/dashboard/upload-project"
              className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3"
            >
              <h1 className="flex items-center">
                <Image src={supplier} alt="" />
                {!open && <span className="ml-2"> Add Projects</span>}
              </h1>
            </Link>
            <Link
              href="/dashboard/project-list"
              className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3"
            >
              <h1 className="flex items-center">
                <Image src={supplier} alt="" />
                {!open && <span className="ml-2"> Projects List</span>}
              </h1>
            </Link>
          </div>
        </div>

        {/* for other devices */}
        <div className=" ">
          <div
            className={`${
              nav
                ? " w-[300px] left-0 duration-500"
                : " left-[-300px] duration-500 "
            } lg:hidden h-screen overflow-y-scroll bg-white absolute`}
          >
            <div className="">
              <div className="ml-4 my-5 flex justify-between">
                <Image src={logo} alt="" />
                <RxCross2
                  className="text-2xl cursor-pointer"
                  onClick={() => setNav(!nav)}
                />
              </div>

              <div className="flex items-center space-x-1 mt-4 ml-4">
                <div>
                  <Image width={50} src={userIcon} alt="" />
                </div>
                <div className="text-sm">
                  <h1 className="font-semibold">admin user</h1>
                  <h1>admin@gmail.com</h1>
                </div>
              </div>
            </div>
            <hr className="w-full mt-3 mb-4" />
            {/* links */}
            <div className="grid ml-4">
              <Link href="/dashboard">
                <h1 className="flex items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3 ">
                  <Image src={dashboard} alt="" />
                  <span className="ml-2"> Dashboard</span>
                </h1>
              </Link>
              <div>
                <div
                  onClick={toggleAddCustomer}
                  className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3 cursor-pointer"
                >
                  <h1 className="flex items-center">
                    <Image src={customer} alt="" />
                    {open && <span className="ml-2"> Customer</span>}
                  </h1>

                  {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
                </div>
                <div className={`ml-5 ${toggle ? "hidden" : "block"}`}>
                  <Link
                    href="/"
                    className="p-3 flex items-center hover:bg-secondary hover:text-secondary rounded-l-full"
                  >
                    <AiOutlinePlus className="mr-2" />
                    Add Customers
                  </Link>
                  <Link
                    className="p-3 flex items-center hover:bg-secondary hover:text-secondary rounded-l-full"
                    href="/products"
                  >
                    <BsCardList className="mr-2" />
                    Customer lists
                  </Link>
                </div>
              </div>
              <Link
                href="/dashboard/upload-project"
                className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3"
              >
                <h1 className="flex items-center">
                  <Image src={supplier} alt="" />
                  <span className="ml-2"> Add Projects</span>
                </h1>
              </Link>
              <Link
                href="/dashboard/project-list"
                className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-[15px] rounded-l-full pl-3"
              >
                <h1 className="flex items-center">
                  <Image src={supplier} alt="" />
                  <span className="ml-2">Projects List</span>
                </h1>
              </Link>
            </div>
          </div>
        </div>

        {/* <main>{children}</main> */}
      </div>
    </div>
  );
};

export default DashboardSidebar;
