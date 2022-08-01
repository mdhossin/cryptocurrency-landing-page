import React from "react";
// import icons
import { CgClose } from "react-icons/cg";
import { navData } from "../../data";
const NavMobile = ({ setNavMobile }) => {
  return (
    <div className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex items-center justify-center">
      {/* close btn */}

      <div
        onClick={() => setNavMobile((prev) => !prev)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <CgClose className="text-3xl" />
      </div>

      {/* menu list */}

      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => (
          <li key={index}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
