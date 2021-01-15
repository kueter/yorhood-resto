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
  
  constructor(public app: AppService) { }

  ngOnInit() {
  }


  checkout() {
    
  }

}
