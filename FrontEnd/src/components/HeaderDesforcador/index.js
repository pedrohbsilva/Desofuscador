import React from "react";
import { Container } from "./style";
import Efect from "../../efect";

export default function Deso() {
  return (
    <Container>
      <h1>Desofuscador</h1>
      <h2>Desofusque sua URL aqui</h2>
      <button onClick={Efect}>Quer desofuscar</button>
    </Container>
  );
}
