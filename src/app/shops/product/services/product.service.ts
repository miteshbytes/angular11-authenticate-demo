import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, public router: Router) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + '/api/products/')
  }

  createProduct(product: Product) : Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL + '/api/product/create/', JSON.stringify(product), this.httpOptions)
  }

  // get only one product
  find(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/api/product/' + id)
  }

  // delete only one product
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/api/product/' + id)
  }

  // update Product
  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API_URL + '/api/product/' + id, JSON.stringify(product), this.httpOptions)
  }

}
