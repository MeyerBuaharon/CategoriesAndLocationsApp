import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Input = styled.input``;
const Row = styled.div`
  display: flex;
`;

const Remove = ({ categories, removeCategory }) => (
  <Container>
    <h1>Remove</h1>
    {categories.map(s => (
      <Row key={s.id}>
        <div>{s.name}</div>
        <Input type="button" value="x" onClick={() => removeCategory(s)} />
      </Row>
    ))}
  </Container>
);

export default Remove;
