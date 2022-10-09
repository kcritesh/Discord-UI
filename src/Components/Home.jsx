import React from "react";
import "./Home.tailwind.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-7/12 mx-auto z-10">
      <h1 className=" font-bold text-7xl text-white text-center mt-12">
        IMAGINE A PLACE...
      </h1>
      <p className="text-white text-center mt-8">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div className="flex mt-8">
        <button className="bg-white btn-homepage mr-3">
          <i class="animate-bounce fa fa-download mr-2" aria-hidden="true"></i>
          Download For Mac
        </button>
        <button className="bg-black text-white btn-homepage ml-3">
          Open Discord in your browser
        </button>
      </div>
    </div>
  );
};

export default Home;
