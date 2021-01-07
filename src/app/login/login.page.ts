import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        ),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }

  get password() {
    return this.LoginForm.get('password');
  }

  get email() {
    return this.LoginForm.get('email');
  }
}
