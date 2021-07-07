import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
import SigninUp from "./pages/sign-in-up/SignInUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninUp} />
      </Switch>
    </div>
  );
}

export default App;
