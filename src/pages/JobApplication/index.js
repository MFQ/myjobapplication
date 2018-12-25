import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Button, Table, thead, tr, th, tbody } from "react-materialize";

import { JobApplicationQuries } from "../../util/quries";
import { DeleteJobApplication } from "../../util/mutations";
import TrJobApplication from "../../components/TrJobApplication";

class JobApplication extends Component {
  renderTrs = jobApplications => {
    return jobApplications.map(jobApplication => (
      <TrJobApplication {...jobApplication} />
    ));
  };

  render() {
    const { renderTrs } = this;
    return (
      <Query query={JobApplicationQuries}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          const { jobApplications } = data;

          return (
            <Table>
              <thead>
                <tr>
                  <th data-field="id">Id</th>
                  <th data-field="company">Company</th>
                  <th data-field="jobdescription"> Job description </th>
                  <th data-field="status"> Status </th>
                  <th data-feid="coverLetter"> Cover Letter </th>
                  <th data-feid="appliedDate"> Applied Date </th>
                  <th data-feild="source"> Source </th>
                  <th data-feild="response"> Response </th>
                  <th data-feild="timeTookToApply"> Time Took to Apply </th>
                  <th data-feild="country"> Country </th>
                  <th data-feild="action"> Action </th>
                </tr>
              </thead>

              <tbody>{renderTrs(jobApplications)}</tbody>
              <Button
                floating
                fab="vertical"
                faicon="fa fa-plus"
                className="red"
                large
                style={{ bottom: "45px", right: "24px" }}
                icon="apps"
              >
                <Link to="/jobapplications/new">
                  <Button floating className="green" icon="add" />
                </Link>
              </Button>
            </Table>
          );
        }}
      </Query>
    );
  }
}

export default graphql(DeleteJobApplication)(JobApplication);
