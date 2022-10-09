import React from "react";
import UsaFlag from "../../../assets/usa_flag.png";
import Images from "../../images";

function Footer() {
  return (
    <div className="footer bg-neutral-800 text-white p-16">
      <section className="top-footer grid grid-cols-5  justify-items-center  leading-loose mb-4">
        <div className="footer-socials">
          <h1 className="footer-title text-blue-600 font-extrabold text-4xl">
            IMAGINE A PLACE
          </h1>
          <div className="footer-language mt-6">
            <img src={UsaFlag} alt="usa-flag" className="w-7 inline mr-2 " />
            <span className="footer-lang">English, USA</span>
          </div>
          <div className="footer-social-icons mt-2 text-2xl 2xl:text-3xl flex justify-between pr-16">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-product flex flex-col ">
          <p className="text-blue-600">Product</p>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Nitro
          </a>
          <a href="/" className="footer-links">
            Status
          </a>
        </div>

        <div className="footer-company flex flex-col">
          <p className="text-blue-600">Company</p>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
        </div>

        <div className="footer-resources flex flex-col">
          <p className="text-blue-600">Resources</p>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
        </div>

        <div className="footer-policies flex flex-col">
          <p className="text-blue-600">Policies</p>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
          <a href="/" className="footer-links">
            Download
          </a>
        </div>
      </section>
      <hr className="border-none h-[1px] bg-sky-600 " />
      <section className="bottom-footer flex justify-between mt-8">
        <div className="footer-logo">
          <Images.discordLogo />
        </div>
        <div className="footer-signup">
          <button className="text-white bg-blue-500 px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default Footer;
