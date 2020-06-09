import React from "react";

import { Container } from "./style";
import Efect from "../../efect";
import EfectLogin from "../../efectLogin";

export default function Header() {
  return (
    <Container>
      <h1>Cadastro/Login</h1>
      <h2>Cadastre seu usuário conosco</h2>
      <div className="buttons">
        <button onClick={EfectLogin}>Login</button>
        <button onClick={Efect}>Quero me cadastrar</button>
      </div>
    </Container>
  );
}
