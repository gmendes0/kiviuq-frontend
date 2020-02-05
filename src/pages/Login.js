import React, { useState, useEffect } from "react";
import api from "../services/api";

import Input from "../components/Input";
import Form from "../components/Form";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) history.push("/");
  }, []);

  async function handleSubmit() {
    const response = await api
      .post(
        "/authenticate",
        {
          email,
          password
        },
        {
          headers: {
            accept: "application/json"
          }
        }
      )
      .catch(error => console.log(error.response));

    if (!response) return null;

    if (response.data && response.data.token) {
      sessionStorage.setItem("token", response.data.token);

      history.push("/");
    }
  }

  return (
    <div className="container">
      <Form title="Login" classes="col-md-5">
        <Input
          type="text"
          field="email"
          label="email"
          placeholder="seu email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          type="password"
          field="password"
          label="senha"
          placeholder="sua senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button className="btn btn-success mt-4" onClick={handleSubmit}>
          Login
        </button>
      </Form>
    </div>
  );
}
