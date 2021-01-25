import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listar-moedas';

  it('deve renderizar o componente sem erros',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<ListarMoedas/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

