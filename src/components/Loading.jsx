import React from "react";
import "../styles/loadingSpinner.styles.css";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center m-10">
      <div class="loader">
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
    </div>
  );
};

export default Loading;
