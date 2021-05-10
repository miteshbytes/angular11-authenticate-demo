import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;
  submitted: boolean = false;
  formError: any = null;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public productService: ProductService
  ) {
    this.productForm= this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  ngOnInit(): void {
  }

  get getControl() {
    return this.productForm.controls;
  }

  submitProduct() {

    this.submitted = true;
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('product');
      }, error => {
        this.formError = JSON.stringify(error.error) || error;
      })
      //console.log(this.productForm.value);  
    }
  
  }

}
