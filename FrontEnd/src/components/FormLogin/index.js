import React, { useState } from "react";
import api from "../../services/api";

import "./style.css";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInUser() {
    await api.post("/users", { email, password });
  }

  return (
    <div className="formLogin hideLogin">
      <h2>Login</h2>

      <form onSubmit={signInUser}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
