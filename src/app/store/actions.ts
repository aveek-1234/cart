import { createAction, props } from "@ngrx/store";

const GET_DATA= '[Any] Get data from API';
const SUCCESS= '[Any] Success';
const ERROR= '[Any]Error';

export const ApiGetData= createAction(GET_DATA);
export const ApiSuccess= createAction(SUCCESS, props<{data:any}>());
export const ApiFail= createAction(ERROR, props<{error:any}>());
