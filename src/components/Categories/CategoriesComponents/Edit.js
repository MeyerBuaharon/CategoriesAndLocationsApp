import React from 'react';
import styled from 'styled-components';
import EditInput from './EditInput';

const Container = styled.div``;
const Row = styled.div`
    display:flex;
`;

const Edit = ({categories,editCategory})=>(
    <Container>
        <h1>Edit</h1>
        {categories.map(s=>(<Row key={s.id}>
            <EditInput categories={categories} item={s} editCategory={editCategory}></EditInput>
        </Row>
        ))}
    </Container>
);

export default Edit;