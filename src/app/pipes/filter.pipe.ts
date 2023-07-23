import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], titleMatch:string , getValue:number): any[]  {
    const result: any= [];
    if(value)
    {
      if( titleMatch==="")
      {
        value.forEach((a:any)=>{
          if(a.price<= getValue)
            result.push(a);
        })
        return result;
      }
    value.forEach((a:any)=>{
      if(a["title"].trim().toLowerCase().includes(titleMatch.toLowerCase()) && a.price<= getValue)
        result.push(a);
    })
    
    }
    return result;
  }
}
