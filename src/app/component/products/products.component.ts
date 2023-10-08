import { Component, OnInit} from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';
import { ShowcartService } from 'src/app/service/showcart.service';
import {MatSliderModule} from '@angular/material/slider';
import {Store,select} from '@ngrx/store';
import { Observable, elementAt, from, map, tap } from 'rxjs';
import { ApiGetData } from 'src/app/store/actions';
import { shopstate, stateModel } from 'src/app/store/reducer';
import { Item } from 'src/app/Models/itemModel';
import { selectShop } from 'src/app/store/shopSelector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  public cardElements: any;
  public cardElementsFiltered:any;
  public cardElementsAddedParams: any[]=[];
  public titleMatch:string="";
  public getValue: number=1000;
  public data$: Observable<any> | undefined;
constructor(private apiacll: ApicallService , private showcart: ShowcartService, private store:Store<shopstate>, private router: Router) {}

ngOnInit(): void {
  // this.apiacll.getItem().subscribe((res:any)=>{
  //     this.cardElements= res;
  //     this.cardElementsFiltered=res;
  //     this.cardElements.forEach((element:any) => {
  //       Object.assign(element,{quantity:1, Price: element.price})
  //       if(element.category==="men's clothing" ||  element.category==="women's clothing"){
  //         element.category= "fashion";
  //     }
  //     });
  // })
  this.store.dispatch(ApiGetData());
  this.data$= this.store.select('shop');
  this.data$.subscribe((res)=>{
    if(res)
    {
      this.cardElements=res.data;
      this.cardElementsFiltered=res.data;
      this.cardElements.forEach((element:Item) => {
          console.log(element)
          //  this.cardElementsAddedParams.push(Object.assign(element,{quantity:1, Price: element.price}));
          // if(element.category==="men's clothing" ||  element.category==="women's clothing"){
          //     element.category= "fashion";
          //  }
          })
      console.log("res",res.data, this.cardElementsAddedParams);
    }
  });
  this.showcart.filterString.subscribe((value:string)=>{
    this.titleMatch= value;
  })
}
addToCart(item: any){
  this.showcart.addToCart(item);
}
filterCategory(category: string )
{
  this.cardElementsFiltered= this.cardElements.filter((a:any)=>{
     if(a.category===category || category==="")
    {
      return a;
    }
    else if (category=='fashion' && (a.category==="men's clothing" ||  a.category==="women's clothing"))
    {
      return a;
    }
  })
}
redirectTo(id:number)
{
  this.router.navigateByUrl(`/details/${id}`);
}
}


