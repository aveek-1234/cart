import { Component, OnInit } from '@angular/core';
import { ShowcartService } from 'src/app/service/showcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public cartItems: any=[];
   constructor( private cartserv: ShowcartService) {}
   ngOnInit(): void {
    this.cartserv.getItemList().subscribe((res)=>{
      this.cartItems= res;
    })
  }
  removeItem(item: any){
    this.cartserv.removeItem(item);
  }
  addqty(item:any)
  {
    this.cartserv.addQuantity(item);
  }
  decreaseqty(item:any)
  {
    this.cartserv.decreaseQuantity(item)
  }
  emptycart(){
    this.cartserv.removeAll()
  }
}
