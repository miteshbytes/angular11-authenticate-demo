import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { isAuthenticated, saveAuthentication } from 'src/app/utility/authManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  formError: any = null;
  
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

    // checked loggedIn or not..
    let loggedIn = isAuthenticated();
    if (loggedIn) {
      window.alert("You are already login..!!");
      this.router.navigate(['profile']);
    }
    
   }
  
  get getControl() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        // save data in session
        saveAuthentication(res);
        this.router.navigate(['profile/']);
        
      }, error => {
        this.formError = error.error.message || error;
      })
    }
  } 

  ngOnInit(): void {
  }

}
