import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import {auth} from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IJIkZKGErwzweTlyspMdNS3pgoSoLzgo5cFF74gU1SbYniMhd4EEeO9OPByem3FjxtxAlojfC0chMaOjBH297iF00teCe0m7L");
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
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
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
