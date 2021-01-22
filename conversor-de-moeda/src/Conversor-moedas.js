import React from 'react';
import './conversor-moedas.css';
import {Jumbotron, Button, Form, Col, Spinner} from 'react-bootstrap';


function ConversorMoeda() {
  return (
    <div>
    <h1>Conversor de Moedas..</h1>
    <Jumbotron>
      <Form>
        <Form.Row>
          <Col sm="3">
            <Form.Control placeholder="0" value={1} required/>
          </Col>
          <Col sm="3">
            <Form.Control as="select"></Form.Control>
          </Col>
          <Col sm="1" className="text-center" style={{paddingTop:"5px"}}>
            <span>> ></span>
          </Col>
          <Col sm="3">
          <Form.Control as="select"></Form.Control>
          </Col>
          <Col sm="2">
            <Button variant="sucess" type="submit">
            Converter
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Jumbotron>
    </div>
  );
}

export default ConversorMoeda;
