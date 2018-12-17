import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import "./App.css";
import Header from "./components/headers";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CoverLetter from "./pages/CoverLetter";
import NewCoveLetter from "./pages/CoverLetter/NewCoverLetter";

class App extends Component {
  getRouters() {
    const { token } = localStorage;
    if (token) {
      const client = new ApolloClient({
        uri: "http://localhost:3000/graphql",
        headers: { Authorization: token }
      });
      return (
        <ApolloProvider client={client}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/coverletters/new" component={NewCoveLetter} />
            <Route path="/coverletters" component={CoverLetter} />
          </Switch>
        </ApolloProvider>
      );
    }
    return (
      <div>
        <Header />
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }

  render() {
    const { getRouters } = this;
    return <Router>{getRouters()}</Router>;
  }
}

export default App;
