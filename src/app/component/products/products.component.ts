import { Component, OnInit} from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';
import { ShowcartService } from 'src/app/service/showcart.service';
import {MatSliderModule} from '@angular/material/slider';

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
constructor(private apiacll: ApicallService , private showcart: ShowcartService) {
}

ngOnInit(): void {
  this.apiacll.getItem().subscribe((res:any)=>{
      this.cardElements= res;
      this.cardElementsFiltered=res;
      this.cardElements.forEach((element:any) => {
        Object.assign(element,{quantity:1, Price: element.price})
        if(element.category==="men's clothing" ||  element.category==="women's clothing"){
          element.category= "fashion";
      }
      });
  })
  
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
filterprice(){
  
}
}
