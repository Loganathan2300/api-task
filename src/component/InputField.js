import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ type, onChange, value, name,placeholder,className }) => {
  // px-2 py-1 mx-2 p-0 w-50
  return (
    <div className="px-2 mx-1 mb-1">
      <Form.Label >{name?.toUpperCase()}</Form.Label>
      <Form.Control
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputField;
