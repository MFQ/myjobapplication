import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { CoverLetterQuries } from "../../util/quries";

class CoverLetter extends Component {
  render() {
    const { token } = localStorage;

    return (
      <Query query={CoverLetterQuries} headers={{ Authorization: token }}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;

          return (
            <Fragment>
              <Link to="/coverletters/new"> Cover Letter New </Link>
              <p> {JSON.stringify(data)} </p>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default CoverLetter;
