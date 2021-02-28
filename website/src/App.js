import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Marketing from "./views/Marketing";
import Portal from "./views/Portal";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Marketing />
        </Route>
        <Route path="/portal" exact>
          <Portal />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
