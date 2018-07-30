import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { log } from 'util';

@Component({
 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
  
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _router: Router,private _productService: ProductService) { }
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products:any;

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');   
    let productName = +this._route.snapshot.paramMap.get('id');         
    this.pageTitle += `:${id}`;
    this.products = this._productService.getProducts();
    console.log(" id ==========", id );
    if(id == 1){
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/img/Leaf.png"
  }
}
if(id == 2){
  this.product = {
    "productId": id,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/img/Garden.png"
}

}
if(id == 5){
  this.product = {
    "productId": id,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/img/Hammer.png"
}

}
if(id == 8){
  this.product = {
    "productId": id,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2016",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/img/saw.png"
}

}
if(id == 10){
  this.product = {
    "productId": id,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2015",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "assets/img/Game.png"
}

}

  }

  
  onBack(): void {
    this._router.navigate(['/products']);
  }

}
