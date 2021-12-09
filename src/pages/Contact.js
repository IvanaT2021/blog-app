import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact=()=>{
    return(
        <div>
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
        </div>
    )
}
export default Contact