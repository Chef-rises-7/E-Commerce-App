import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect( ()=> {
    auth
        .onAuthStateChanged( authUser => {
          console.log(authUser);
          if(authUser) {
            dispatch({
              type: "SET_USER",
              user: authUser
            });
          } else {
            dispatch({
              type: "SET_USER",
              user: null
            })
          }
        })
  },[])

  return (
    <Router>
      <Switch>
      <div className="app">
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
