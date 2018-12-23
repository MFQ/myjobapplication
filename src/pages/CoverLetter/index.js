import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { Button } from "react-materialize";

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
              <Button
                floating
                fab="vertical"
                faicon="fa fa-plus"
                className="red"
                large
                style={{ bottom: "45px", right: "24px" }}
                icon="apps"
              >
                <Link to="/coverletters/new">
                  <Button
                    floating
                    className="green"
                    icon="add"
                    href="/coverletters/"
                  />
                </Link>
              </Button>
              {renderCoverLetters(coverletters)}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default CoverLetter;
