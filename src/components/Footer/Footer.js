import React from "react";
import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const Footer = () => {
  const links = [
    {
      id: 1,
      text: "Cras justo odio",
    },
    {
      id: 2,
      text: "Dapibus ac facilisis in",
    },
    {
      id: 3,
      text: "Vestibulum at eros",
    },
    {
      id: 4,
      text: "Dapibus ac facilisis in",
    },
  ];
  const links2 = [
    {
      id: 1,
      text: "About us",
    },
    {
      id: 2,
      text: "Contact",
    },
    {
      id: 3,
      text: "Privacy Polices",
    },
  ];

  const customStil = {
    border: "1px solid rgb(223, 231, 214)",
    padding: "8px",
    backgroundColor: "rgb(217 221 172)",
  };
  const linkStyle = {
    color: "gray",
    textDecoration: "none",
  };

  const linkG = {
    link: "https://www.google.com/",
  };
  return (
    <div className={styles.footer}>
      <Container >
        <Row style={{ paddingBottom: "16px" }} >
          <Col xs={12} md={6} lg={6} className="mt-xs-16">
            <Form
              style={{
                height: "250px",
                border: "1px solid #bacda6",
                padding: "25px",
                borderRadius: "5px",
                backgroundColor: "#c2c59b",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="formDiv">
                  <h3>Do you want to get our latest updates?</h3>
                </div>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <Card style={{ width: "12rem", marginLeft: "5px" }}>
              <ListGroup
                variant="flush"
                style={{
                 
                  border: "1px solid #bacda6",
                  borderRadius: "5px",
                }}
              >
                {links.map((link) => {
                  return (
                    <ListGroup.Item style={customStil} key={link.id}>
                      <a href={linkG.link} style={linkStyle}>
                        {link.text}
                      </a>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <Card style={{ width: "12rem", marginLeft: "5px" }}>
              <ListGroup
                variant="flush"
                style={{ border: "1px solid #bacda6", borderRadius: "5px" }}
              >
                {links2.map((link) => {
                  return (
                    <ListGroup.Item style={customStil} key={link.id}>
                      <a href={linkG.link} style={linkStyle}>
                        {link.text}
                      </a>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
