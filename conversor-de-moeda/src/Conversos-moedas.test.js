import React from "react";
import ReactDOM from "react-dom";
import ConversorMoedas from "./Conversor-moedas";
import { render, fireEvent } from "@testing-libary/react";
import axiosMock from "axios";
import '@testing-library/jest-dom/extend-expect';

describe("Teste do componente de conversão de moedas", () => {
  it("Deve renderizar o componentes sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Deve simular uma conversão de moedas", async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValue({
      data: { success: true, rates: { BRL: 4.566429, USD: 1.101049 } },
    });
    fireEvent.click(getByTestId("btn-conveter"));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD')
  });
});

// mochar
