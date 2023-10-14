import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from 'src/app/store/reducer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutItems:any;
  total: number=0;
  constructor(private store: Store<cartState>){}
  ngOnInit(): void {
    this.store.select('cart').subscribe((res)=>{
        this.checkOutItems=res.data;
        this.total=this.calculateTotal(this.checkOutItems)
    })
  }
  
  calculateTotal(checkOutItems:any):number{
    let total=0;
    checkOutItems.map((items:any)=>{
      total+= items.price*items.quantity;
    })
    return total;
  }

}
