import { Component } from '@angular/core';

@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent {
  constructor() { }
  public fileDropped: File[]=[]
  public imgsrc="https://st3.depositphotos.com/3591429/18632/i/600/depositphotos_186320162-stock-photo-illustration-image-icon.jpg"
  getFile(event:any)
  {
      this.fileDropped.push(event[0]);
  }

  removeFile(index: number )
  {
    this.fileDropped.splice(index,1);
  }
}
