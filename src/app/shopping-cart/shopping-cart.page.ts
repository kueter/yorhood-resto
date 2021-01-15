import { Component, OnInit } from '@angular/core';
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
  
  constructor(public app: AppService) {
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
  }

  checkout() {
    
  }

}
