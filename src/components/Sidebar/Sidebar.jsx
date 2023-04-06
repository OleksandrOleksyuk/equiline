import React from "react";
import logo from "../../assets/equiline-logo-white.svg";
import sidebarBg from "../../assets/equiline-sidebar-bg.jpg";
import close from "../../assets/svg/x-mark.svg";
import user from "../../assets/svg/user.svg";
import heart from "../../assets/svg/heart.svg";

const Sidebar = ({ openNav, setOpenNav }) => {
  const slideStyle = {
    // transition: "transform 1s ease",
  };
  return (
    <div
      className={`w-screen h-screen bg-slate-900 absolute top-0 left-0 z-20 sidebar ${
        openNav ? "open" : ""
      }`}
    >
      <div className="relative w-screen h-64 overflow-hidden">
        <div className="flex justify-center py-5 absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <img src={logo} alt="Logo Equiline" />
        </div>
        <img
          src={close}
          alt="close navbar"
          className="absolute top-0 right-0 m-5 w-6 h-6 z-10 cursor-pointer"
          onClick={() => setOpenNav(() => !openNav)}
        />
        <div className="w-full overflow-hidden">
          <img src={sidebarBg} className="object-cover" />
        </div>
        <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 h-full w-full absolute top-0 left-0 opacity-30"></div>
        <input
          type="text"
          name="name"
          placeholder="Cerca"
          className="top-1/3 left-1/2 absolute w-10/12 -translate-x-1/2 bg-zinc-500 opacity-40 p-1 placeholder:text-white border-[1px] border-zinc-100 z-10"
        />

        <div className="absolute bottom-0 left-0 m-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <img src={user} className="h-6 w-6" />
            <p className="hover:underline cursor-pointer font-light text-sm">
              Account
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={heart} className="h-6 w-6" />
            <p className="hover:underline cursor-pointer font-light text-sm">
              Lista desideri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
