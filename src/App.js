import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
