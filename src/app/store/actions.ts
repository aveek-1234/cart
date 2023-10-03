import { createAction, props } from "@ngrx/store";
import { Item } from "../Models/itemModel";

const GET_DATA= '[Any] Get data from API';
const SUCCESS= '[Any] Success';
const ERROR= '[Any]Error';
const ADD_CART= '[Any]ADD_CART';
const REMOVE_CART='[Any]Remove_Cart'; 
const INCREASE_QTY= '[Any]IncreaseQuantity';
const DECREASE_QTY= '[Any]decreaseQuantity';
export const ApiGetData= createAction(GET_DATA);
export const ApiSuccess= createAction(SUCCESS, props<{data:Item[]}>());
export const ApiFail= createAction(ERROR, props<{error:string}>());
export const AddCart= createAction(ADD_CART, props<{item:Item}>());
export const RemoveCart= createAction(REMOVE_CART, props<{item:Item}>());
export const IncreaseQty= createAction(INCREASE_QTY, props<{id:number}>());
export const DecreaseQty= createAction(DECREASE_QTY, props<{id:number}>());