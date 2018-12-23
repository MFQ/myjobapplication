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

// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
//
// class NewEntry extends Component {
//   onClick() {
//     this.props.mutate({
//       variables: { repoFullName: 'apollographql/apollo-client' }
//     })
//       .then(({ data }) => {
//         console.log('got data', data);
//       }).catch((error) => {
//         console.log('there was an error sending the query', error);
//       });
//   }
//
//   render() {
//     return <div onClick={this.onClick.bind(this)}>Click me</div>;
//   }
// }
//
// const submitRepository = gql`
//   mutation SubmitRepository($repoFullName: String!) {
//     submitRepository(repoFullName: $repoFullName) {
//       createdAt
//     }
//   }
// `;
//
// const NewEntryWithData = graphql(submitRepository)(NewEntry);
