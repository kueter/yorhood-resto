import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  
  subtotal:any;
  byTax:any;
  total_order: any;
  
  constructor(public app: AppService, public toastController: ToastController) {
    this.app.getTotalAmount().subscribe(
      (_) => {
         this.total_order = _*1.1;
      }
    );
   }

  ngOnInit() {
  }

  remove(item: any) {
    this.app.removeFromCart(item);
    this.presentToast('Food remove from cart');
  }

  checkout() {
    
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

}
