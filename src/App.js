import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
import SigninUp from "./pages/sign-in-up/SignInUp";
import { auth } from "./firebase/firebase.util";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
