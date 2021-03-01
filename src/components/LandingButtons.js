import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
const LandingButtons = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col s lg="2">
            <a href="/search">
              <Button variant="dark" block size="lg">
                Search
              </Button>
            </a>
          </Col>
          <Col>
            <a href="overview">
              <Button variant="dark" block size="lg">
                Big-O Overview
              </Button>
            </a>
          </Col>
          <Col s lg="2">
            <a href="sort">
              <Button variant="dark" block size="lg">
                Sort
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col s lg="2">
            <a href="/heaps">
              <Button variant="dark" block size="lg">
                Heaps
              </Button>
            </a>
          </Col>
          <Col>
            <a href="/datastructures">
              <Button variant="dark" block size="lg">
                Data Structures
              </Button>
            </a>
          </Col>
          <Col s lg="2">
            <a href="/graphs">
              <Button variant="dark" block size="lg">
                Graphs
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LandingButtons;
