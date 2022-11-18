import React from "react";
import "./not-found.css";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 Error </h1>
      <img
        draggable="false"
        role="img"
        class="emoji"
        alt=""
        src="https://s.w.org/images/core/emoji/14.0.0/svg/1f6a8.svg"
      ></img>
      {"🚨"}
      <h1>Page Not Found!!</h1>
    </div>
  );
};

// export default PageNotFound;
