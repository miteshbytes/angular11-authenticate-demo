import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  formError: any = null;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
    this.registerForm= this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  get getControl() {
    return this.registerForm.controls;
  }

  registerUser() {

    this.submitted = true;
      if (this.registerForm.valid) {
          this.authService.register(this.registerForm.value).subscribe((res) => {
           
          if (res.message) {
            this.registerForm.reset()
            this.router.navigate(['login']);
          }
        }, error => {
          this.formError = error.message || error;
        })
      }
  }
}
