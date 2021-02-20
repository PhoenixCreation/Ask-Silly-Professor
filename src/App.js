import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import { UserProvider } from "./context/Auth";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Navbar />
        {/* <Router>
          <Switch>
            <Route path="/" exact>
            </Route>
            <Route path="/login" exact>
            </Route>
            <Route path="/signup" exact>
            </Route>
          </Switch>
        </Router> */}
      </UserProvider>
    </div>
  );
}

export default App;
