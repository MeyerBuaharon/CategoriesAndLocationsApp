import React from 'react';
import styled from 'styled-components'

const Container = styled.div``;

const View = ({categories})=>(
    <Container>
        <h1>View</h1>
        {categories.map((s,idx)=>(
            <div key={idx}>{s.name}</div>
        ))}
    </Container>
);

export default View;