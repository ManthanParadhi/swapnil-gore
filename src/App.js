import "./Css/App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
