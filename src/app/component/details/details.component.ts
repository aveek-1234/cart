import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/Models/itemModel';
import { shopstate } from 'src/app/store/reducer';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId:number | undefined; 
  data$: Observable<any> | undefined;
  items:any;
  item:any;
  constructor(private route : ActivatedRoute, private stote: Store<shopstate>){}
   
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params)=>{
        this.productId= +(params.get('id')??'-1');
      }
    )
    this.data$= this.stote.select('shop');
    this.data$.subscribe((res)=>{
      this.items= res.data;
    })
    this.items.map((product:any)=>{
        if(product.id===this.productId)
        {
          this.item= product;
        }
    })
  }
 
}
