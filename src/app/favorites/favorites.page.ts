import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  v = false;

  constructor(public app: AppService) { }

  ngOnInit() {
  }


  switchView() {
    this.v = !this.v;
  }

}
