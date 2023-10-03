import {createReducer, on} from '@ngrx/store';
import { AddCart, ApiFail, ApiGetData, ApiSuccess, DecreaseQty, IncreaseQty, RemoveCart } from './actions';
import { Item } from '../Models/itemModel';
import { state } from '@angular/animations';


export interface stateModel
{
    error:string,
    data:Item[]
}

export interface shopstate{
    shop : stateModel;
}

const initialStateShop:stateModel={
    error:'',
    data:[]
}

export const shopReducer = createReducer(initialStateShop, 
    on(ApiSuccess, (state,action)=>({
        ...state,
        data:[...action.data],
        error:''
    })),
    on(ApiFail, (state, action)=>({
        ...state,
        error:action.error,
        data:[]
    })),
   
    )


// cart reducer section-------------------------------------------------------------------------------------------------------------

    export interface cartModel
    {
        data: Item[],
        error: string
    }
    
    export interface cartState
    {
        cart :cartModel
    }

    const initialStateCart:stateModel={
        error:'',
        data :[]
    }
     
export const cartReducer = createReducer (initialStateCart, 
    on(AddCart,(state, action)=>({
        ...state,
        data: [...state.data, action.item]
    })),
    on(IncreaseQty,(state, action)=>(
        {
            ...state,
            data: state.data.map((value)=>value.id===action.id?{...value, quantity:value.quantity+1}:value)
        }
    )),
    on(DecreaseQty, (state, action)=>({
        ...state,
        data: state.data.map((value)=>value.id===action.id?{...value,quantity:value.quantity-1}:value)
    })),
    on(RemoveCart, (state, action)=>({
        ...state,
        data:state.data.filter((item)=>item.id!= action.item.id)
    }))
    )