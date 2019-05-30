import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import { ProductModel } from './product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  arr_product:ProductModel[]=[];
  constructor(private _data:ProductserviceService) { }

  ngOnInit() {
    this.arr_product=this._data.getAllProduct();
  }
  onDelPro(item:ProductModel){
    this._data.delProduct(item);
  }
  onSortAddPro(item:ProductModel){
    this._data.addToSortListPro(item);
  }
}
