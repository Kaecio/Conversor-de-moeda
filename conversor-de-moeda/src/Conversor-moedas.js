import React from 'react';
import './conversor-moedas.css';
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';


function ConversorMoeda() {
  return (
    <div>
    <h1>Conversor de Moedas..</h1>
    <Alert variant="danger" show={false}>
      Erro obtendo moeda
    </Alert>
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
            <span>`{`>>`}`</span>
          </Col>
          <Col sm="3">
          <Form.Control as="select"></Form.Control>
          </Col>
          <Col sm="2">
            <Button variant="success" type="submit">
            <Spinner animation="border" size="sm" />
            Converter
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Conversão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Resultado da conversão aqui
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            Nova Conversão
          </Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
    </div>
  );
}

export default ConversorMoeda;
