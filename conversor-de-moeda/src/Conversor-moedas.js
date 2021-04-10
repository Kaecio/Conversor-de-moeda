import React, { useState } from 'react';
import './conversor-moedas.css';
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import ListarMoedas from './listar-moedas';
import axios from 'axios';


function ConversorMoeda() {

  const FIXER_URL = `http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3`;

  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [resultadoConvert, setResultadoConvert] = useState('');
  const [msgError, setMsgError] = useState(false);

  const handleValorChange = (event) =>{
      event.preventDefault();
      setValor(event.target.value.replace(/\D/g, ''))
  }

  const handlemoedaDeChange = (event) =>{
    setMoedaDe(event.target.value)
  }

  const handlemoedaParaChange = (event) =>{
    setMoedaPara(event.target.value)
  }

  const converter = (event) =>{
  event.preventDefault();
  setFormValidado(true)
  if (event.currentTarget.checkValidity() === true) {
    setExibirSpinner(true);
    axios.get(FIXER_URL)
    .then(res => {
      const cotacao = obterCotacao(res.data)
      if (cotacao) {
        setResultadoConvert(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`);
        setExibirModal(true);
        setExibirSpinner(false)
        setMsgError(false);
      }else{
        msgError();
      }
    }).catch(err => exibirErro());
  }
}

const obterCotacao = (dadosCotacao) =>{
  if (!dadosCotacao || dadosCotacao.success !== true) {
      
  }
  const cotacaoDe = dadosCotacao.rates[moedaDe]
  const cotacaoPara = dadosCotacao.rates[moedaPara]
  const cotacao = ( 1 / cotacaoDe * cotacaoPara ) * valor;
  return cotacao.toFixed(2);
}

const handleCloserModal =(event)=>{
  setValor('1');
  setMoedaDe('BRL');
  setMoedaPara('USD');
  setFormValidado(false);
  setExibirModal(false);
}

const exibirErro = () =>{
  setMsgError(true);
  setExibirSpinner(false)
}

  return (
    <div>
    <h1>Conversor de Moedas</h1>
    <Alert variant="danger" show={msgError}>
      Erro ao obter a moeda, tente novamente.
    </Alert>
    <Jumbotron>
      <Form onSubmit={converter} noValidate validated={formValidado}>
        <Form.Row>
          <Col sm="3">
            <Form.Control placeholder="0" value={valor} onChange={handleValorChange} required/>
          </Col>
          <Col sm="3">
            <Form.Control as="select"
            value={moedaDe}
            onChange={handlemoedaDeChange}>
              <ListarMoedas />
            </Form.Control>
          </Col>
          <Col sm="1" className="text-center" style={{paddingTop:"5px"}}>
            <span><strong>{`>>`}</strong></span>
          </Col>
          <Col sm="3">
          <Form.Control as="select"
          value={moedaPara}
          onChange={handlemoedaParaChange}>
            <ListarMoedas />
          </Form.Control>
          </Col>
          <Col sm="2">
            <Button variant="success" type="submit" data-testid="btn-converter" >
            <span className={exibirSpinner? null : 'hidden'} >
            <Spinner animation="border" size="sm" />
            </span>
            <span className={exibirSpinner? 'hidden' : null}>
            Converter
            </span>
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <Modal show={exibirModal} onHide={handleCloserModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Conversão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resultadoConvert}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloserModal}>
            Nova Conversão
          </Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
    </div>
  );
}

export default ConversorMoeda;
