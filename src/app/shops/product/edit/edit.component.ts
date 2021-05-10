import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productForm: FormGroup;
  submitted: boolean = false;
  formError: any = null;
  id: number = 0;
  product: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.productForm= this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['productId'];
    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });

  }

  get getControl() {
    return this.productForm.controls;
  }

  updateProduct() {

    this.submitted = true;
    if (this.productForm.valid) {
      this.productService.update(this.id, this.productForm.value).subscribe(res => {
        console.log('Post updated successfully!');
        this.router.navigateByUrl('product');
      }, error => {
        this.formError = JSON.stringify(error.error) || error;
      })
      //console.log(this.productForm.value);
  
  }

  }
}
