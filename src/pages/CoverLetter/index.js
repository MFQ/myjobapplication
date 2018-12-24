import React, { Component, Fragment } from "react";
import { Query, graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Button } from "react-materialize";

import { CoverLetterQuries } from "../../util/quries";
import CardItem from "../../components/CardItem";
import { DeleteCoverLetter } from "../../util/mutations";

class CoverLetter extends Component {
  renderCoverLetters = coverletters => {
    const { mutate } = this.props;
    return coverletters.map(({ content, id, kind, deleteCoverLetter }) => (
      <CardItem
        hostname="coverletters"
        content={content}
        deleteItem={() => {
          mutate({
            variables: { id },
            update: (proxy, responseData) => {
              const { coverletters } = proxy.readQuery({
                query: CoverLetterQuries
              });
              const newData = coverletters.filter(d => d.id !== id);
              proxy.writeQuery({
                query: CoverLetterQuries,
                data: { coverletters: newData }
              });
            }
          })
            .then(({ data }) => {
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            });
        }}
        kind={kind}
        id={id}
        key={id}
      />
    ));
  };

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

export default graphql(DeleteCoverLetter)(CoverLetter);
