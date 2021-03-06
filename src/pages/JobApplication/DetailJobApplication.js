import React, { Component } from "react";
import { Query } from "react-apollo";
import { Row, Col, Card } from "react-materialize";

import { JobApplicationFilterQuries } from "../../util/quries";

class DetailJobApplication extends Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={JobApplicationFilterQuries(id)}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          const { jobApplications } = data;
          const {
            id,
            company,
            jobDescription,
            status,
            coverLetter,
            appliedDate,
            source,
            response,
            timeTookToApply,
            country
          } = jobApplications[0];

          return (
            <Row>
              <Col m={8} s={12}>
                <Card horizontal>
                  <Row> id: {id} </Row>
                  <Row> company: {company} </Row>
                  <Row> Job Description:{jobDescription} </Row>
                  <Row> status:{status} </Row>
                  <Row> coverLetter:{coverLetter} </Row>
                  <Row> appliedDate:{appliedDate} </Row>
                  <Row> source:{source} </Row>
                  <Row> response:{response} </Row>
                  <Row> timeTookToApply:{timeTookToApply} </Row>
                  <Row> country:{country} </Row>
                </Card>
              </Col>
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default DetailJobApplication;
