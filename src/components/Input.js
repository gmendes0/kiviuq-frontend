import React from "react";

export default function Input({ field, type, label, onChange }) {
  return (
    <div className="form-group row">
      <label htmlFor={field} className="col-form-label col-md-3 text-sm-right">
        {label}
      </label>
      <div className="col-md-7">
        <input
          className="form-control"
          type={type}
          id={field}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
