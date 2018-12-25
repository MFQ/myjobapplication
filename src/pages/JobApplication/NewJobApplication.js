import React, { Component } from "react";
import { graphql } from "react-apollo";
import { forEach } from "lodash";

import { CreateJobApplication } from "../../util/mutations";
import { JobApplicationQuries } from "../../util/quries";

import JobApplicationForm from "./Form";

class NewJobApplication extends Component {
  render() {
    const { mutate, history } = this.props;
    return (
      <JobApplicationForm
        submitLabel="Added Job Application"
        initialValues={{
          company: "",
          jobDescription: "",
          status: "",
          coverLetter: "",
          appliedDate: "",
          source: "",
          response: "",
          timeTookToApply: "",
          country: "",
          notes: ""
        }}
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
  }
}

export default graphql(CreateJobApplication)(NewJobApplication);
