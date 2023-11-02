import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((el) => (
          <Col>
            <h3>{el.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
