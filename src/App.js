import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import { UserProvider } from "./context/Auth";
import Explore from "./routes/Explore";
import Home from "./routes/Home";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore" exact>
              <Explore />
            </Route>
            <Route path="/login" exact></Route>
            <Route path="/signup" exact></Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
