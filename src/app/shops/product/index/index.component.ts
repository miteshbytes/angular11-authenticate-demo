import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    }) 
  }

  // Delete Product
  deleteProduct(id: any) {
    if(confirm("Are you sure to delete this product ?")) {
      this.productService.delete(id).subscribe(res => {
          this.products = this.products.filter(item => item.id !== id);
          console.log('Product deleted successfully!');
      })
    }
  }

}
