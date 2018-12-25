import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import { Row, Col, Card, Button } from "react-materialize";

import {
  JobApplicationQuries,
  JobApplicationFilterQuries
} from "../../util/quries";

import { DeleteJobApplication } from "../../util/mutations";

class DetailJobApplication extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      history,
      mutate
    } = this.props;

    return (
      <Query query={JobApplicationFilterQuries(id)}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          const { jobApplications } = data;
          return JSON.stringify(jobApplications[0]);
        }}
      </Query>
    );
  }
}

export default DetailJobApplication;
