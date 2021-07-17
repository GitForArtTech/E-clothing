import React from "react";
import "./cart-dropdown.scss";

import CustomBtn from "../custom-button/CustomBtn";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-item">
      <CustomBtn>CHECKOUT</CustomBtn>
    </div>
  </div>
);

export default CartDropdown;
