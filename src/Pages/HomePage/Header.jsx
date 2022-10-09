import React from "react";
import Home from "../../Components/Home";
import Navbar from "../../Components/Navbar";
import LeftBgLandingHeader from "../../../assets/left_bg_landing_header.svg";
import RightBgLandingHeader from "../../../assets/right_bg_landing_header.svg";
import CenterBgLanding from "../../../assets/center_bg_landing_header.svg";

const Header = () => {
  return (
    <div className="header bg-[#404eed]  xl:h-[620px] w-full relative z-10">
      <Navbar />
      <Home />
      <div className="bgImages absolute w-full h-full top-0 left-0 -z-10 overflow-hidden	">
        <img
          src={LeftBgLandingHeader}
          alt="leftBgLandingHeader"
          className="absolute block	bottom-0 -left-24 w-4/12"
        />
        <img
          src={RightBgLandingHeader}
          alt="RightBgLandingHeader"
          className="absolute block	bottom-0 -right-24 w-4/12"
        />
        <img
          src={CenterBgLanding}
          alt="CenterBgLanding"
          className="absolute block	bottom-0 -z-20 "
        />
      </div>
    </div>
  );
};

export default Header;
