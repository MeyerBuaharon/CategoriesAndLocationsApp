import React from "react";
import styled from "styled-components";
import { withState, withStateHandlers } from "recompose";
import AddItem from "./AddItem";

const Label = styled.label``;
const Input = styled.input``;
const Container = styled.div``;
const AddContainer = styled.div`
  display: flex;
`;

const newDataObject = {
  name: "",
  address: "",
  coordinations: { x: "", y: "" },
  category: { name: "" }
};

const createLocation = (newData, onChange, categories) => [
  {
    label: "name",
    type: "text",
    value: newData.name,
    onChange: event => onChange("name", event.target.value)
  },
  {
    label: "address",
    type: "text",
    value: newData.address,
    onChange: event => onChange("address", event.target.value)
  },
  {
    label: "coordinations-x",
    type: "text",
    value: newData.coordinations.x,
    onChange: event => onChange("coordinations", event.target.value, "x")
  },
  {
    label: "coordinations-y",
    type: "text",
    value: newData.coordinations.y,
    onChange: event => onChange("coordinations", event.target.value, "y")
  },
  {
    label: "category",
    type: "option",
    categories,
    onChange: event => onChange("category", event.target.value, "name")
  }
];

const Add = ({ onChange, newData, addNewLocation, categories }) => (
  <Container>
    <h1>Add</h1>
    <AddContainer>
      {createLocation(newData, onChange, categories).map((value, idx) => (
        <AddItem key={idx} {...value} />
      ))}
    </AddContainer>
    <Input
      type="button"
      value="click"
      onClick={() => addNewLocation(newData)}
    />
  </Container>
);

export default withStateHandlers(
  () => {
    return { newData: { ...newDataObject } };
  },
  {
    onChange: ({ newData }) => (prop, value, secondprop) => {
      const newerData = { ...newData };
      const newerCoordinations = { ...newerData.coordinations };
      const newerCategory = { ...newerData.categories };
      if (secondprop === undefined) {
        newerData[prop] = value;
      } else if (prop === "coordinations") {
        newerCoordinations[secondprop] = value;
        newerData[prop] = newerCoordinations;
      } else {
        newerCategory[secondprop] = value;
        newerData[prop] = newerCategory;
      }
      return { newData: newerData };
    }
  }
)(Add);
