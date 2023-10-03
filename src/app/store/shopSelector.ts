import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Item } from "../Models/itemModel";
import {shopReducer, stateModel} from './reducer';


export const selectShop = createSelector<any>((state:stateModel)=>state.data)