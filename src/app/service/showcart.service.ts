import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { cartState } from '../store/reducer';
import { AddCart, DecreaseQty, IncreaseQty, RemoveCart } from '../store/actions';
import { Item } from '../Models/itemModel';

@Injectable({
  providedIn: 'root'
})
export class ShowcartService  {
  public ItemList:any=[];
  public filterString = new BehaviorSubject<string>("");
  private flg: boolean=false;
  constructor(private store : Store<cartState>) { }
  getCartElements(): void {
    this.store.select('cart').subscribe((res:any)=>{
      this.ItemList= res.data;
      console.log("ak",this.ItemList);
    })
  }
  
  addToCart(item:Item)
  {
    let flag:boolean=false;
    this.getCartElements();
    this.ItemList.map((element:Item)=>{
      if(element.id===item.id)
      {
        this.addQuantity(item.id);
        flag=true;
      }
    })
    if(!flag)
    {
      this.store.dispatch(AddCart({item}));
    }
  }
  removeItem(item:Item)
  {
    this.store.dispatch(RemoveCart({item}));
  }
  removeAll()
  {
    this.ItemList=[];
  }
  addQuantity(id : any)
  {
    this.store.dispatch(IncreaseQty({id}));
  
  }
  decreaseQuantity(id: any)
  {
    let flg=0;
    this.getCartElements();
    this.ItemList.map((item:Item)=>{
      if(item.id===id && item.quantity===1)
      {
        this.store.dispatch(RemoveCart({item}))
        flg=1;
      }
    })
    if(flg===0)
    {
      this.store.dispatch(DecreaseQty({id}))
    }
  
  }

}
