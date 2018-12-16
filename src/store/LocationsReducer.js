import {makeReducer,composeReducers} from 'redux-toolbelt';
import * as actions from './actions';

export const locations = composeReducers(makeReducer(actions.addLocation,(state,{payload})=>[...state,payload],{
    defaultState:[
        {
            name:'london',address:'london22',coordinations:{x:'2',y:'2'},category:{name:'meyer'}
        },
        {
            name:'NewYork',address:'NewYork22',coordinations:{x:'2',y:'2'},category:{name:'boaron'}
        },
        
    ]
}),
makeReducer(actions.deleteLocation,(state,{payload})=>{
    const newerData = [...state];
    newerData.splice(newerData.findIndex(x=>x===payload),1);
    return newerData;
}))