import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
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
