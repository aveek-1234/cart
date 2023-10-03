import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/Models/itemModel';
import { ShowcartService } from 'src/app/service/showcart.service';
import { cartState } from 'src/app/store/reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public cartItems: any=[];
  ItemList: any;
  inc_dec_id:number=0;
   constructor( private cartserv: ShowcartService,private store : Store<cartState>) {}
   ngOnInit(): void {
    // this.cartserv.getItemList().subscribe((res)=>{
    //   this.cartItems= res;
    // })
    this.store.select('cart').subscribe((res:any)=>{
      this.cartItems= res.data;
      // console.log("ak caart",this.cartItems);
    })
  }
  removeItem(item: any){
    this.cartserv.removeItem(item);
  }
  addqty(item:any)
  {
    this.cartItems.map((a:Item)=>{
      if(a.id===item.id)
        this.inc_dec_id=a.id;
    })
    this.cartserv.addQuantity(this.inc_dec_id);
  }
  decreaseqty(item:any)
  {
    this.cartItems.map((a:Item)=>{
      if(a.id===item.id)
        this.inc_dec_id=a.id;
    })
    this.cartserv.decreaseQuantity(this.inc_dec_id)
  }
  emptycart(){
    this.cartserv.removeAll()
  }
}
