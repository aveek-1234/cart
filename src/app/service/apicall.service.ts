import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Item } from '../Models/itemModel';
//import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
    url:string= "https://fakestoreapi.com/products/";

  constructor(private http:HttpClient) {}
  getItem():Observable<Item[]>
  {
    return this.http.get<Item[]>(this.url).pipe(map((res)=>{
          var items:Item[]=[];
          items=res;
          return items;
       }))
  }

}

// this.http.get<any>("https://fakestoreapi.com/products/").pipe(map((res:any)=>{
//   return res;
// }))