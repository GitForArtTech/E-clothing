import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
