import React from 'react';

function ListarMoedas() {
  const MOEDAS = [
    {"sigla":"USD","descricao":"Dólar dos Estados Unidos"},
    {"sigla":"BRL","descricao":"Real Brasileiro"},
    {"sigla":"TRY","descricao":"Lira turca"},
    {"sigla":"JPY","descricao":"Iene japonês"},
    {"sigla":"HKD","descricao":"Dólar de Hong Kong"},
    {"sigla":"MXN","descricao":"Peso Mexicano"},
    {"sigla":"GBP","descricao":"Libra Esterlina"},
    {"sigla":"NOK","descricao":"Coroa Noruega"},
    {"sigla":"NZD","descricao":"Dólar da Noca Zelandia"},
    {"sigla":"CAD","descricao":"Dólar Canadense"}
  ];

  const compare = (moeda1, moeda2) =>{
    if (moeda1.descricao < moeda2.descricao) {
      return -1;
    }else if (moeda1.descricao > moeda2.descricao) {
      return 1
    }
    return 0
  }
  return MOEDAS.sort(compare).map(moeda => 
  <option value ={moeda.sigla} key={moeda.sigla}>
    {moeda.descricao}
  </option>
  );
}

export default ListarMoedas;