import React, { Component } from "react";
import { Query, graphql } from "react-apollo";

import { UpdateJobApplication } from "../../util/mutations";
import {
  JobApplicationQuries,
  JobApplicationFilterQuries
} from "../../util/quries";
import JobApplicationForm from "./Form";
import { OnValidateErrors } from "../../util";

class EditJobApplication extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      mutate,
      history
    } = this.props;

    return (
      <Query query={JobApplicationFilterQuries(id)}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          const { jobApplications } = data;

          return (
            <JobApplicationForm
              submitLabel="Update Job Application"
              initialValues={{ ...jobApplications[0] }}
              onValidate={OnValidateErrors}
              onSubmit={(values, { setSubmitting }) => {
                mutate({
                  variables: { ...values },
                  refetchQueries: [{ query: JobApplicationQuries }]
                })
                  .then(({ data }) => {
                    setSubmitting(false);
                    history.push("/jobapplications");
                  })
                  .catch(error => {
                    setSubmitting(false);
                    console.log(error);
                  });
              }}
            />
          );
        }}
      </Query>
    );
  }
}

export default graphql(UpdateJobApplication)(EditJobApplication);
