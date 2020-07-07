//Tela do sistema para realizar o desofuscamento quando o usuário estiver logado
import React, { Component } from "react";
import MainDecoded from "../../components/MainDecoded";
import { Container } from "./style";
import Navigation from "../../components/Navigation";

class System extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <MainDecoded />
      </Container>
    );
  }
}

export default System;
