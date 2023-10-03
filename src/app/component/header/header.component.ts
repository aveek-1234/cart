import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowcartService } from 'src/app/service/showcart.service';
import { cartState } from 'src/app/store/reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalLength: number=0;
  public getVal: string ="";
  public isOpen:boolean=false;
   constructor(private cart : ShowcartService, private store: Store<cartState>) {}
  ngOnInit(): void {
    this.store.select('cart').subscribe((res)=>{
      this.totalLength= res.data.length;
    })
  }
  search(event:any){
      this.getVal= (event.target as HTMLInputElement).value;
      console.log(this.getVal);
      this.cart.filterString.next(this.getVal);
  }
  toggleopen()
  {
       this.isOpen=!this.isOpen;
       console.log(this.isOpen);
  }
  removedropdown()
  {
    this.isOpen=false;
    console.log(this.isOpen);
  }
}
