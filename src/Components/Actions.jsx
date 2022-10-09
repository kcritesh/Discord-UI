import React from "react";
import JustChilling from "../../assets/just_chiling_landing.svg";
import StartBg from "../../assets/tiny_stars_landing.svg";

export default function Actions() {
  return (
    <>
      <section className="actions bg-slate-100 grid grid-rows-5 px-28 py-16">
        <div className="actions-banner flex flex-col justify-center items-center text-center px-20">
          <h1 className="banner-title uppercase font-bold text-5xl mb-5">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className="banner-desc capitalize">
            Low-latency voice and video feels like you're in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>

        <div className="actions-image row-start-2 row-end-5 h-100 flex flex-col justify-center items-center text-center">
          <img src={JustChilling} alt="justChilling" className="h-full" />
        </div>

        <div className="actions-cta flex flex-col justify-center items-center text-center relative">
          <h1 className="actions-cta-title font-bold text-4xl mb-8">
            Ready to start your journey?
          </h1>
          <img src={StartBg} alt="tinyStars" className="absolute top-0 w-1/3" />
          <button className="bg-blue-600 py-5 px-14 text-white text-lg font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50">
            <i
              class="animate-bounce fa fa-download mr-2"
              aria-hidden="true"
            ></i>
            Download For Mac
          </button>
        </div>
      </section>
    </>
  );
}
