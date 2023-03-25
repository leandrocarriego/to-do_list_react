import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../Menu/Menu";

const Wrapper = ({ children }) => {

  return (
    <>
      <Menu />
      <Container className="col-6 justify-content-center">
        <Row>
          <Col className="align-self-center">{children}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Wrapper;
