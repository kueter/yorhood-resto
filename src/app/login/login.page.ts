import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.initForm();
  }

  swithRegister() {
    this.router.navigateByUrl('register');
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

  login() {
    const form = this.LoginForm.value;
    if(form.email === 'ed23@gmail.com' && form.password === '12345678') {
      this.router.navigateByUrl('home');
    }
    this.LoginForm.reset();
    this.presentToast();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error Login failed',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
