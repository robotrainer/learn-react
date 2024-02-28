import React from "react";

import classes from "./Button.module.scss";

export const Button = ({ style, className, type, onClick, children }) => {
  return (
    <button
      style={{ ...style }}
      className={[classes.button, className].filter((e) => e).join(" ")}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
