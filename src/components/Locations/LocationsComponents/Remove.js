import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Input = styled.input``;
const Row = styled.div`
  display: flex;
`;

const Remove = ({ locations, removeLocation }) => (
  <Container>
    <h1>Remove</h1>
    {locations.map(s => (
      <Row key={s.id}>
        <div>{s.name}</div>
        <Input type="button" value="x" onClick={() => removeLocation(s)} />
      </Row>
    ))}
  </Container>
);

export default Remove;
