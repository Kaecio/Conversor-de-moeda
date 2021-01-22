import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './Conversor-moedas';

it('Deve renderizar o componentes sem erros',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas />,div);
  ReactDOM.unmountComponentAtNode(div);
})