import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { CreateCoverLetter } from "../../util/mutations";

class NewCoveLetter extends Component {
  render() {
    const { mutate, history } = this.props;
    return (
      <Formik
        initialValues={{ kind: "", content: "" }}
        validate={values => {
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
            variables: { ...values }
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
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="kind" />
            <ErrorMessage name="kind" component="div" />

            <Field type="text" name="content" />
            <ErrorMessage name="content" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Add CoverLetter
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default graphql(CreateCoverLetter)(NewCoveLetter);
