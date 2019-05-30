import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent implements OnInit {
  pro_arr:ProductModel[]=[];
  constructor(private _datapro:ProductserviceService) { }

  ngOnInit() {
    this.pro_arr=this._datapro.getSortProduct();
  }
  onDelSort(item:ProductModel){
    this._datapro.delSortPro(item);
  }
}
