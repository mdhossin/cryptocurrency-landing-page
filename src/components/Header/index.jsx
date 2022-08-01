import React, { useState } from "react";
import { Logo } from "../../assets";
import AccountBtns from "../AccountBtns";
import NavItems from "../NavItems";
// import icons
import { CgMenuRight } from "react-icons/cg";
import NavMobile from "../NavMobile";
const Header = () => {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-[30px] lg:pt-[30px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* nav logo */}

        <a href="#">
          <img src={Logo} alt="" />
        </a>

        {/* nav and btns */}
        <div className="hidden lg:flex gap-x-[55px]">
          <NavItems />
          <AccountBtns />
        </div>
        {/* open nav btn */}

        <div
          onClick={() => setNavMobile((prev) => !prev)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-3xl" />
        </div>

        {/* mobile menu */}

        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed z-10 top-0 h-full transition-all duration-300`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
