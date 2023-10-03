import { Injectable } from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'
import { ApicallService } from '../service/apicall.service';
import { AddCart, ApiFail, ApiGetData, ApiSuccess } from './actions';
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Item } from '../Models/itemModel';
@Injectable({
  providedIn: 'root'
})
export class ShopEffectService {

  constructor(private action$:Actions, private apicall:ApicallService) { }

  getDataEffect= createEffect(
    ()=>this.action$.pipe(
      ofType(ApiGetData),
      switchMap(()=>{
        return this.apicall.getItem().pipe(
          map((val)=>{
            val.forEach((element:Item)=>Object.assign(element,{quantity:1}));
            return val;
          }),
          map(val=> ApiSuccess({data:val})),
          catchError( (error) => of(ApiFail({ error })))
        )
      })
    )
  )
  // testEffect= createEffect(
  //   ()=>this.action$.pipe(
  //     ofType(AddCart),
  //     tap(()=>{console.log("EffectTest")})
  //   )
  // )
}
