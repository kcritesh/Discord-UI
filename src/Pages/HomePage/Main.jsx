import React from "react";
import Actions from "../../Components/Actions";
import Features from "../../Components/Features";
import Images from "../../images";

const features = [
  {
    img: Images.inviteOnlyLanding,
    title: "Create an invite-only place where you belong",
    desc: "Discord Servers are organized into topic-based channels where you can collaborate, Share, and just talk about your day without clogging up a group chat",
  },
  {
    img: Images.hangingOutEasy,
    title: "Where hanging out is easy",
    desc: "Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.",
  },
  {
    img: Images.fandom,
    title: "Create and invite-only place where you belong",
    desc: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
  },
];

const Main = () => {
  return (
    <>
      {features.map((feature, index) => {
        return (
          <Features dark={index % 2 !== 0 ? true : false}>
            <div
              className={
                index % 2 == 0
                  ? "features-image col-start-1 col-end-5 "
                  : "features-image col-start-3 col-end-7 order-last"
              }
            >
              <feature.img />
            </div>
            <div className="features-text flex flex-col justify-center col-span-2 w-[360px]">
              <h1 className="features-text-title text-5xl	font-bold	relaxed mb-5">
                {feature.title}
              </h1>
              <p className="features-text-description">{feature.desc}</p>
            </div>
          </Features>
        );
      })}
      <Actions />
    </>
  );
};

export default Main;
