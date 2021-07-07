import React from "react";
import "../custom-button/CustomBtn.scss";

const CustomBtn = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomBtn;
