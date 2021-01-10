import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab: any;

  
  constructor(private router: Router) {}

  onSearchChange(event: any) {
    console.log(event.target.value);
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }

  shoppingCart () {
    this.router.navigateByUrl('shopping-cart');
  }

}
