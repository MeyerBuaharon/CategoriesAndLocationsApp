import React,{Fragment} from 'react';
import styled from 'styled-components';
import {withState,withHandlers,compose} from 'recompose';

const Input = styled.input``;

const EditInput =({item,value,onChange,editCategory}) =>(
    <Fragment>
        <Input type="text" value={value} onChange={onChange}></Input>
        <Input type="button" value="edit" onClick={()=>editCategory({item,value})}></Input>
    </Fragment>
);

export default compose(
    withState('value','updateValue',({item})=>item.name),
    withHandlers({
        onChange:props=>event=>{
            props.updateValue(event.target.value);
        }
    })
)(EditInput);