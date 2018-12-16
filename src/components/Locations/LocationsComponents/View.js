import React from 'react';
import styled from 'styled-components'

const Container = styled.div``;
const Row = styled.div`
display:flex;
`;

const Item= styled.div`
padding:8px;
`;

const Header =['name','address','coordinations','category'];

const View = ({locations})=>(
    <Container>
        <h1>View</h1>
        <Row>
            {Header.map((x,idx)=>(
                <Item key={idx}>{x}</Item>
            ))}
        </Row>
        {locations.map((s,idx)=>(
          <Row key={idx}>
                <Item>{s.name}</Item>
                <Item>{s.address}</Item>
                <Item>{s.coordinations.x} {s.coordinations.y}</Item>
                <Item>{s.category.name}</Item>
          </Row>
        ))}
    </Container>
)

export default View;