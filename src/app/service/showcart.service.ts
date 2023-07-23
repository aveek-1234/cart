import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowcartService {
  public ItemList:any=[];
  public prodList= new BehaviorSubject<any>([]);
  public filterString = new BehaviorSubject<string>("");
  private flg: boolean=false;
  constructor() { }
  getItemList()
  {
    return this.prodList.asObservable()
  }
  setItemList(product: any)
  {
    this.ItemList.push(...product);
    this.prodList.next(product);
  }
  addToCart(product:any)
  {
    this.ItemList.map((a:any)=>{
      if(a.id===product.id)
      {
        a.quantity+=1;
        this.flg=true;
      }
    })
    if(this.flg==false)
    {
      this.ItemList.push(product);
    }
    console.log(this.ItemList);
    this.prodList.next(this.ItemList);
    this.flg=false;
  }
  removeItem(product:any)
  {
    this.ItemList.map((a:any, index:any)=>{
      if(a.id=== product.id)
      {
        this.ItemList.splice(index,1)
      }
    })
    this.prodList.next(this.ItemList);
  }
  removeAll()
  {
    this.ItemList=[];
    this.prodList.next(this.ItemList);
  }
  addQuantity(product : any)
  {
    this.ItemList.map((a:any)=>{
      if(a.id===product.id)
      {
        a.quantity+=1;
      }
    })
    this.prodList.next(this.ItemList);
  }
  decreaseQuantity(product: any)
  {
    this.ItemList.map((a:any)=>{
      if(a.id===product.id)
      {
        a.quantity-=1;
        if(a.quantity===0)
        {
          this.removeItem(product)
        }
      }
    })
    this.prodList.next(this.ItemList);
  }

}
