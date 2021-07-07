import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";

const HatsPage = () => (
  <>
    <h1>Hats Pages!</h1>
  </>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
