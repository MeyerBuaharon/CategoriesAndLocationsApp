import React from "react";
import styled from "styled-components";

const Label = styled.label``;
const Input = styled.input``;

const AddItem = ({ type, categories, ...rest }) => {
  switch (type) {
    case "text":
      return <Input type={type} {...rest} />;
    case "option":
      return (
        <select {...rest}>
          <option>CHOOSE</option>
          {categories.map((x, idx) => (
            <option key={idx}>{x.name}</option>
          ))}
        </select>
      );
    default:
      return <div>aaaa</div>;
  }
};

const AddInput = ({ label, ...rest }) => (
  <div>
    <Label>{label}</Label>
    <AddItem {...rest} />
  </div>
);

export default AddInput;