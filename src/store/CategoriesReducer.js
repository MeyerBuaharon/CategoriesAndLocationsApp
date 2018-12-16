import {makeReducer, composeReducers} from 'redux-toolbelt';
import * as actions from './actions';

export const categories = composeReducers(
    makeReducer(actions.addCategory,(state,{payload})=>[...state,payload],{
        defaultState:[{name:'Meyer'},{name:'boaron'}],
    }),
    makeReducer(actions.editCategoryAction,(state,{payload})=>{
        const newerData = [...state];
        const newObj ={name:payload.value};
        newerData.splice(newerData.findIndex(s=>s===payload.item),1,newObj);
        return [...newerData];
    })
);