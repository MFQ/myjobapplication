// @flow

import React from "react";

import { Row, Col, Card } from "react-materialize";

type Props = {
  kind: string,
  content: string,
  id: number
};

const BtnActions = (id: number) => [
  <a key={`${id}readmore`} href={`/coverletters/${id}`}>
    Read more
  </a>,
  <a key={`${id}edit`} href={`/coverletters/${id}/edit`}>
    Edit
  </a>
];

const CardItem = ({ content, kind, id }: Props) => (
  <Row>
    <Col m={7} s={12}>
      <Card horizontal actions={BtnActions(id)}>
        <p>{content.substr(0, 200)}</p>
        <p>
          <strong>Kind:</strong> {kind}
        </p>
      </Card>
    </Col>
  </Row>
);

export default CardItem;
