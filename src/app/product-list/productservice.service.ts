import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  arrproduct:ProductModel[]=[
    new ProductModel(1,'Watch',1200,30),
    new ProductModel(2,'tv',12000,50)
 ];
 arrsort:ProductModel[]=[];
  constructor() {}
   
  getAllProduct():ProductModel[]{
    return this.arrproduct;
  }

  addProduct(item:ProductModel){
    this.arrproduct.push(item);
  }
  delProduct(item:ProductModel){
    this.arrproduct.splice(this.arrproduct.indexOf(item),1);
  }
  getSortProduct():ProductModel[]{
    return this.arrsort;
  }
  addToSortListPro(item:ProductModel){
    if(this.arrsort.indexOf(item)!=-1){
      alert("This Cart Are Already Exits");
    }
    else{
      this.arrsort.push(item);
    }
  }
  delSortPro(item:ProductModel){
    this.arrsort.splice(this.arrsort.indexOf(item),1);
  }
}
