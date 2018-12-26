import React, { Component } from "react";
import { Query, graphql } from "react-apollo";

import { UpdateCoverLetter } from "../../util/mutations";
import { CoverLetterFilterQuries, CoverLetterQuries } from "../../util/quries";
import CoverLetterForm from "./Form";
import { OnValidateErrors } from "../../util";

class EditCoverLetter extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      mutate,
      history
    } = this.props;

    return (
      <Query query={CoverLetterFilterQuries(id)}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          const { coverletters } = data;
          return (
            <CoverLetterForm
              submitLabel="Update Cover Letter"
              initialValues={{ ...coverletters[0] }}
              onValidate={OnValidateErrors}
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
        }}
      </Query>
    );
  }
}

export default graphql(UpdateCoverLetter)(EditCoverLetter);
