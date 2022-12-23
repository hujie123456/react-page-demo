import * as React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <>
      <div className="box h-100px w-100px relative">
        <div className="item absolute w-4 h-4 rounded-1/2 bg-blue-300 top-0"></div>
        <div
          className="item absolute w-4 h-4 rounded-1/2 bg-blue-300 top-0 left-1/2 transform -translate-x-1/2 rotate-36"
          style={{ transformOrigin: "8px 50px" }}
        ></div>
      </div>
    </>
  );
};

export default Loading;
