import React from 'react';
import styled from 'styled-components';
import {withState} from 'recompose';
const Label = styled.label``;
const Input = styled.input``;
const Container = styled.div``;

const Add=({onSubmit, inputValue,onChangeInput})=>(
    <Container>
        <h1>Add</h1>
        <Label>Something:</Label>
        <Input type="input" value={inputValue} onChange={event=>onChangeInput(event.target.value)}></Input>
        <Input type="button" value="click" onClick={() => onSubmit(inputValue)}></Input>
    </Container>
);

export default withState('inputValue','onChangeInput','')(Add);