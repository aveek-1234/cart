import { Component, OnInit} from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';
import { ShowcartService } from 'src/app/service/showcart.service';
import {MatSliderModule} from '@angular/material/slider';
import {Store,select} from '@ngrx/store';
import { from } from 'rxjs';
import { ApiGetData } from 'src/app/store/actions';
import { stateModel } from 'src/app/store/reducer';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  public cardElements: any;
  public cardElementsFiltered: any;
  public titleMatch:string="";
  public getValue: number=1000;
constructor(private apiacll: ApicallService , private showcart: ShowcartService, private store:Store<stateModel>) {}

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
  const data$= this.store.select('data');
  const error$= this.store.select('error');
  data$.subscribe(res=>console.log(res));
  this.showcart.filterString.subscribe((value:string)=>{
    this.titleMatch= value;
  })
  console.log(this.cardElements);
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
  })
}
}


