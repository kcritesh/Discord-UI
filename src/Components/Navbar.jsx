import React from "react";
import Images from "../images";

import "./Navbar.tailwind.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between w-100 px-28 py-6">
        <div className="logo-navbar">
          <Images.discordLogo />
        </div>

        <div className="menu text-white">
          <ul className="menu-list flex align-middle font-semibold">
            <li>
              <a href="/" className="menu-lists ">
                Download
              </a>
            </li>
            <li>
              <a href="/" className="menu-lists">
                Nitro
              </a>
            </li>
            <li>
              <a href="/" className="menu-lists">
                Safety
              </a>
            </li>
            <li>
              <a href="/" className="menu-lists">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="menu-lists">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="menu-lists">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-slate-100 py-2 px-4 rounded-3xl ">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
