import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  

  
  constructor() {}

  onSearchChange(event) {
    console.log(event.target.value);
  }

  setCurrentTab() {

  }

}
