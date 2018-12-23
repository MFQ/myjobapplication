import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { CoverLetterQuries } from "../../util/quries";
import CardItem from "../../components/CardItem";

class CoverLetter extends Component {
  renderCoverLetters(coverletters) {
    return coverletters.map(({ content, id, kind }) => (
      <CardItem content={content} kind={kind} id={id} key={id} />
    ));
  }

  render() {
    const { renderCoverLetters } = this;

    return (
      <Query query={CoverLetterQuries}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;

          const { coverletters } = data;

          return (
            <Fragment>
              <Link to="/coverletters/new"> Cover Letter New </Link>
              {renderCoverLetters(coverletters)}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default CoverLetter;
