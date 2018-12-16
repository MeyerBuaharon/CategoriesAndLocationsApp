import React from 'react';
import styled from 'styled-components';
import EditInput from './EditInput';

const Container = styled.div``;
const Row = styled.div`
    display:flex;
`;

const Edit = ({locations,editLocation})=>(
    <Container>
        <h1>Edit</h1>
        {locations.map(s=>(<Row key={s.id}>
            <EditInput locations={locations} item={s} editLocation={editLocation}></EditInput>
        </Row>
        ))}
    </Container>
);

export default Edit;