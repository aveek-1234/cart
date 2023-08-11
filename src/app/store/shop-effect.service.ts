import { Injectable } from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'
import { ApicallService } from '../service/apicall.service';
import { ApiFail, ApiGetData, ApiSuccess } from './actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopEffectService {

  constructor(private action$:Actions, private apicall:ApicallService) { }

  getDataEffect= createEffect(
    ()=>this.action$.pipe(
      ofType(ApiGetData),
      exhaustMap(()=>{
        return this.apicall.getItem().pipe(
          map(val=>ApiSuccess({data:val})),
          catchError(async (error) => ApiFail({ error: error }))
        )
      })
    )
  )
}
