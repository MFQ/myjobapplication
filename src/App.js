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
import NewCoverLetter from "./pages/CoverLetter/NewCoverLetter";
import EditCoverLetter from "./pages/CoverLetter/EditCoverLetter";
import DetailCoverLetter from "./pages/CoverLetter/DetailCoverLetter";

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
            <Route path="/coverletters/new" component={NewCoverLetter} />
            <Route path="/coverletters/:id/edit" component={EditCoverLetter} />
            <Route path="/coverletters/:id" component={DetailCoverLetter} />
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
