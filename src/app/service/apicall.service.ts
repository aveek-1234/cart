import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
    url:string= environment.apiurl;

  constructor(private http:HttpClient) {}
  getItem()
  {
    return this.http.get<any>(this.url).pipe(map((res:any)=>{
           return res;
       }))
  }

}

// this.http.get<any>("https://fakestoreapi.com/products/").pipe(map((res:any)=>{
//   return res;
// }))