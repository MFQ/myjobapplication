import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import { Row, Col, Card, Button } from "react-materialize";

import { CoverLetterFilterQuries, CoverLetterQuries } from "../../util/quries";
import { DeleteCoverLetter } from "../../util/mutations";

class DetailCoverLetter extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      history,
      mutate
    } = this.props;

    return (
      <Query query={CoverLetterFilterQuries(id)}>
        {({ loading, error, data }) => {
          if (loading) return <p> Loading ... </p>;
          if (error) return <p> Error </p>;
          console.log(data);
          const { coverletters } = data;
          const { kind, content, id } = coverletters[0];

          return (
            <Row>
              <Col m={8} s={12}>
                <Card horizontal>
                  <Row>
                    <Col m={11} s={11} />
                    <Col m={1} s={1}>
                      <Button
                        floating
                        className="red"
                        icon="delete"
                        onClick={() => {
                          mutate({
                            variables: { id },
                            refetchQueries: [{ query: CoverLetterQuries }]
                          })
                            .then(e => history.push("/coverletters"))
                            .catch(error => {
                              console.log(error);
                            });
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <p> {content} </p>
                    <p>
                      <strong>Kind:</strong> {kind}
                    </p>
                  </Row>
                </Card>
              </Col>
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default graphql(DeleteCoverLetter)(DetailCoverLetter);
