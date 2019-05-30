import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private _prodata:ProductserviceService) { }

  ngOnInit() {
  }
  onAddProduct(pro_id,pro_name,pro_price,pro_soh){
    this._prodata.addProduct(new ProductModel(pro_id,pro_name,pro_price,pro_soh));
  }
  onCancel(){
    
  }
}
