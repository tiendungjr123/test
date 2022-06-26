import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Splash from "./components/splash/Splash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Splash/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signUp">
            <SignUp/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
