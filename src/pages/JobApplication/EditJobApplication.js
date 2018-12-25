import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import { forEach } from "lodash";

import { UpdateJobApplication } from "../../util/mutations";
import {
  JobApplicationQuries,
  JobApplicationFilterQuries
} from "../../util/quries";
import JobApplicationForm from "./Form";

class EditJobApplication extends Component {
  render() {
    // return "ajksbdajsdbjad Edit Job application";
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
              onValidate={values => {
                let errors = {};
                forEach(values, (value, key) => {
                  if (value === "") {
                    errors[key] = "Required";
                  }
                });
                return errors;
              }}
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
