// @flow

import React from "react";

import { Row, Col, Card, Button } from "react-materialize";

type Props = {
  kind: string,
  content: string,
  id: number,
  deleteItem: func,
  hostname: string
};

const BtnActions = (id: number, hostname: string) => [
  <Button key={`${id}readmore`} node="a" href={`/${hostname}/${id}`}>
    Read more
  </Button>,
  <Button key={`${id}edit`} node="a" href={`/${hostname}/${id}/edit`}>
    Edit
  </Button>
];

const CardItem = ({ content, kind, id, deleteItem, hostname }: Props) => (
  <Row>
    <Col m={8} s={12}>
      <Card horizontal actions={BtnActions(id, hostname)}>
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
