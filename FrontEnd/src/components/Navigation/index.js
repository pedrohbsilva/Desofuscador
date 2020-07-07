import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export default function Navigation() {
  return (
    <Container>
      <Link style={{ marginRight: 8 }} to="/System">
        Desofuscamento
      </Link>
      <Link to="/UserList">Lista de Usuário</Link>
    </Container>
  );
}
