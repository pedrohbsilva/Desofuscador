import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import EfectLogin from "../../efectLogin";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <Container>
      <h1>Login</h1>
      <h2>Faça seu login para ter acesso as funcionalidades</h2>
      <div className="buttons">
        <button onClick={EfectLogin}>Login</button>
        <h5>Ainda não possui um cadastro?</h5>

        <Link to={`/SignUp/`}>
          <FiLogIn style={{ marginRight: 8 }} />
          Cadastre-se conosco!
        </Link>
      </div>
    </Container>
  );
}
