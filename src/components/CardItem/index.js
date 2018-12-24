// @flow

import React from "react";

import { Row, Col, Card, Button } from "react-materialize";

type Props = {
  kind: string,
  content: string,
  id: number,
  deleteItem: func
};

const BtnActions = (id: number) => [
  <Button key={`${id}readmore`} href={`/coverletters/${id}`}>
    Read more
  </Button>,
  <Button key={`${id}edit`} href={`/coverletters/${id}/edit`}>
    Edit
  </Button>
];

const CardItem = ({ content, kind, id, deleteItem }: Props) => (
  <Row>
    <Col m={8} s={12}>
      <Card horizontal actions={BtnActions(id)}>
        <Row>
          <Col m={11} s={11} />
          <Col m={1} s={1}>
            <Button
              floating
              className="red"
              icon="delete"
              onClick={deleteItem}
            />
          </Col>
        </Row>
        <Row>
          <p>{content.substr(0, 200)}</p>
          <p>
            <strong>Kind:</strong> {kind}
          </p>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default CardItem;
