import React from "react";

export default function Input({ field, type, label }) {
  return (
    <div className="form-group row">
      <label htmlFor={field} className="col-form-label col-sm-2">
        {label}
      </label>
      <div className="col-sm-10">
        <input className="form-control" type={type} id={field} />
      </div>
    </div>
  );
}
