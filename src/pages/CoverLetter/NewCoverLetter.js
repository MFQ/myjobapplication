import React, { Component } from "react";
import { graphql } from "react-apollo";

import { CreateCoverLetter } from "../../util/mutations";
import { CoverLetterQuries } from "../../util/quries";
import CoverLetterForm from "./Form";

class NewCoverLetter extends Component {
  render() {
    const { mutate, history } = this.props;
    return (
      <CoverLetterForm
        submitLabel="Add Cover Letter"
        initialValues={{ kind: "", content: "" }}
        onValidate={values => {
          let errors = {};
          if (!values.kind) {
            errors.kind = "Required";
          }
          if (!values.content) {
            errors.content = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          mutate({
            variables: { ...values },
            refetchQueries: [{ query: CoverLetterQuries }]
          })
            .then(({ data }) => {
              setSubmitting(false);
              history.push("/coverletters");
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

export default graphql(CreateCoverLetter)(NewCoverLetter);
