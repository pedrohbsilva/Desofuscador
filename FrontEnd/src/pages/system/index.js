//Tela do sistema para que usuária poderá entrar quando estiver logado;

import React, { Component } from "react";
import Deso from "../../components/HeaderDesforcador";
import FormDeso from "../../components/Formdeso";


class System extends Component {
  render() {
    return (
      <>
        <Deso />
        <FormDeso></FormDeso>
      </>
    );
  }
}

export default System;
