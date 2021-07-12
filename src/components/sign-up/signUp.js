import React from "react";

import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-button/CustomBtn";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "../sign-up/signUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      comfirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, comfirmPassword } = this.state;
    if (password !== comfirmPassword) {
      alert("password don't match ");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      //把form 清乾淨
      this.setState = {
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      };
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, comfirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="comfirmPassword"
            value={comfirmPassword}
            onChange={this.handleChange}
            label="Comfirm Password"
            required
          ></FormInput>
          <CustomBtn type="submit">SIGN UP</CustomBtn>
        </form>
      </div>
    );
  }
}
export default SignUp;
