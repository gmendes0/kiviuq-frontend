import React from "react";

export default function Form({ children, title, classes }) {
  return (
    <div className="text-center">
      <div className="row justify-content-center">
        <div className={`card mt-5 py-5 rounded-lg ${classes}`}>
          <h1 className="text-muted mb-5">{title}</h1>
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
