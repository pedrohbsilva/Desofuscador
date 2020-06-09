import React, { useState } from "react";
import api from "../../services/api";

import "./style.css";

export default function Form() {
  const [name, setName] = useState("");

  async function donate(event) {
    await api.post("/", { name });
  }

  return (
    <div className="form hide">
      <h2>Desofusque sua Url aqui!</h2>

      <form onSubmit={donate}>
        <input
          type="text"
          placeholder="Informe a sua URL"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Desofuscar</button>
      </form>
    </div>
  );
}
