import DashboardNavbar from "@/components/DashboardComponent/DashboardSharedComponent/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardComponent/DashboardSharedComponent/DashboardSidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="flex  ">
        {/* Sidebar (Fixed) */}
        <div className="h-screen">
          <DashboardSidebar
            open={open}
            setOpen={setOpen}
            nav={nav}
            setNav={setNav}
          />
        </div>

        <div className="w-full bg-[#EFF2F5]">
          <DashboardNavbar
            open={open}
            setOpen={setOpen}
            nav={nav}
            setNav={setNav}
          />
          <div className="bg-[#EFF2F5] h-screen">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
