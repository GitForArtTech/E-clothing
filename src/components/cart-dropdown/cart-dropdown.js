import React from "react";
import { connect } from "react-redux";
import "../cart-dropdown/cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";

import CustomBtn from "../custom-button/CustomBtn";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomBtn>CHECKOUT</CustomBtn>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
