import React from "react";

function Features({ children, dark }) {
  return (
    <div
      className={`features grid content-center grid-cols-6 justify-between px-36 py-28 ${
        dark ? "bg-slate-100" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Features;
