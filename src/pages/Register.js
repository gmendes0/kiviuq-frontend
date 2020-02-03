import React from "react";

import Input from "../components/Input";

export default function Register() {
  return (
    <div className="container">
      <div className="text-center">
        <div className="row justify-content-center">
          <div className="card col-md-8 mt-5 py-5">
            <h1 className="text-muted mb-5">Registrar</h1>
            <div className="card-body">
              <Input type="text" field="username" label="username" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
