import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
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
  
  constructor(public app: AppService, public toastController: ToastController,
    public alertController: AlertController) {
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
    this.presentAlertPrompt();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }



  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Payement Settings',
      inputs: [
        {
          name: 'Number',
          type: 'text',
          placeholder: 'Account number',
          value: '4242345678890'
        },
        {
          name: 'Exp date',
          type: 'text',
          value: '10/22',
          placeholder: 'Expire Date'
        },
        {
          name: 'RIB',
          type: 'text',
          value: '431',
          placeholder: 'RIB'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          role:'ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
