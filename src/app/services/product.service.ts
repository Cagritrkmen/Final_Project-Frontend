import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:20321/api/products/getall';
  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<ProductResponseModel> {
    this.httpClient
      return this.httpClient.get<ProductResponseModel>(this.apiUrl)
      
  }
}
