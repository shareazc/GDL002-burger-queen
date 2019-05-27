import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Waiter } from "./components/Waiter";
import { Kitchen } from "./components/Kitchen";
import Breakfast from "./components/Breakfast";
import { LunchAndDinner } from "./components/LunchAndDinner";
import { PendingOrders } from "./components/PendingOrders";
import { NewOrders } from "./components/NewOrders";
import { FinishedOrders } from "./components/FinishedOrders";
import { NoMatch } from "./components/NoMatch";


function App() {
  return (
    <div className="App">     
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/waiter" component={Waiter} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/lunch-and-dinner" component={LunchAndDinner} />
          <Route path="/pending-orders" component={PendingOrders} />
          <Route path="/new-orders" component={NewOrders} />
          <Route path="/finished-orders" component={FinishedOrders} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
