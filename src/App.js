import "./Css/App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Component/Navigation";
import About from "./Component/About";
import Events from "./Component/Events";
import Library from "./Component/Library";

function App() {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-1">
        <Navigation />
      </div>
      <div className="col-span-7">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
