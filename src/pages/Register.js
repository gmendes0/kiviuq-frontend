import React, { useState } from "react";
import api from "../services/api";

import Input from "../components/Input";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  async function handleSubmit() {
    const response = await api
      .post(
        "/register",
        {
          username,
          email,
          password
        },
        {
          headers: {
            Accept: "application/json"
          }
        }
      )
      .catch(error => console.log(error.response.data));

    /**
     * caso haja erro
     */
    if (!response) return null;

    /**
     * resposta sem erros
     */
    console.log(response.data);
  }

  return (
    <div className="container">
      <div className="text-center">
        <div className="row justify-content-center">
          <div className="card col-md-8 mt-5 py-5">
            <h1 className="text-muted mb-5">Registrar</h1>
            <div className="card-body">
              <Input
                type="text"
                field="username"
                label="username *"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
              <Input
                type="email"
                field="email"
                label="email *"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <Input
                type="password"
                field="password"
                label="senha *"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <Input
                type="password"
                field="password"
                label="confirme a senha *"
                value={confirmation}
                onChange={event => setConfirmation(event.target.value)}
              />
              <button
                className="text-center btn btn-success mt-5"
                onClick={handleSubmit}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
