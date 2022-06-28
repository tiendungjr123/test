import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Splash from "./components/splash/Splash";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
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
    </BrowserRouter>
    
  );
}

export default App;
