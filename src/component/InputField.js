import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ type, onChange, value, name }) => {
  return (
    <div>
      <Form.Label>{name?.toUpperCase()}</Form.Label>
      <Form.Control
        type={type}
        className=" px-2 py-1 mx-2 p-0 w-50"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputField;
