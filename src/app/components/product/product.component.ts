import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded= false
  filterText="";
  

  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"])
      }else{
        this.getProducts()
        
      }
    })

  } //ngoninit program başladığında çalışan kod bloğudur

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
    
  }
  getProductsByCategoryId(categoryId:number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
  }
  addToCart(product:Product){
    if(product.productID===1){
      this.toastrService.error("Hata","Bu Ürün Sepete Eklenemez")
    }else{
      this.toastrService.success("Sepete Eklendi",product.productName)
      this.cartService.addToCart(product);
    }
    

  }
  
}
