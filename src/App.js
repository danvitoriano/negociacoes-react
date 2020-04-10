import React from "react";
import logo from './logo.svg'
import "./App.css";
import NegociacaoForm from './js/app/components/NegociacaoForm'
import NegociacaoList from "./js/app/components/NegociacaoList";
import { NegociacoesContextProvider } from "./js/store";

export default () => (
  <div className="container">
    <div className="py-3 text-center">
      <img src={logo} alt="logo" className="w-25 p-3" />
      <h1 className="h2 py-2">Negociacoes</h1>
    </div>
    <NegociacoesContextProvider>
      <NegociacaoForm />
      <NegociacaoList />
    </NegociacoesContextProvider>
  </div>
)  
