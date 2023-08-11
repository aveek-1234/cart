import {createReducer, on} from '@ngrx/store';
import { ApiFail, ApiGetData, ApiSuccess } from './actions';

export interface stateModel
{
    error:string;
    data:any[];
}

const initialState:stateModel={
    error:'',
    data:[]
}

export const shopReducer= createReducer(initialState, 
    on(ApiSuccess, (state,action)=>({
        data:action.data,
        error:''
    })),
    on(ApiFail, (state, action)=>({
        error:action.error,
        data:[]
    }))
    )