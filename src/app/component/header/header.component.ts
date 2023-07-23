import { Component, OnInit} from '@angular/core';
import { ShowcartService } from 'src/app/service/showcart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalLength: number=0;
  public getVal: string ="";
   constructor(private cart : ShowcartService) {}
  ngOnInit(): void {
    this.cart.getItemList().subscribe((res)=>{
      this.totalLength= res.length;
    })
  }
  search(event:any){
      this.getVal= (event.target as HTMLInputElement).value;
      console.log(this.getVal);
      this.cart.filterString.next(this.getVal);
  }
}