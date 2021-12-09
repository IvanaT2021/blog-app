import React from "react";
//import styles from "./MainCard.module.css";
import Card from "react-bootstrap/Card";


import Button from "react-bootstrap/Button";
// const MainCard = ({title, text, imgSrc}) => {
  const MainCard = ({title, text, buttonTitle}) => {
  return (
    <>
      <div>
      {/* <Col xs={12} sm={6} md={6} lg={4} id="main"> */}
        <Card style={{ width: "20rem", margin: "32px  32px"}}>
          {/* <Card.Img variant="top" src={imgSrc}/> */}
          <Card.Body>
            <Card.Title style={{ textAlign: "center"}}>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}} variant="warning" href="https://www.google.com/">go to...</Button>
          </Card.Body>
        </Card>
      {/* </Col> */}
      </div>
    </>
  );
};

export default MainCard;
