import { Component, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppService } from '../app.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  food: any;
  reduce = false;
  qte = 1;
  mount: any;
  price: any;

  favorites: any[];
  foods: any[];
  added: boolean = false;

  constructor(private route: ActivatedRoute, public service: DataService ,
     public app: AppService ,public toastController: ToastController) {
    
    this.route.params.subscribe(
      (_: any) => {
         this.food = this.service.foods.filter((data: any) => data?.id == _?.id);
         this.price = this.food[0]?.price;
          this.mount = this.price;
      }
    );

    this.app.getFavorites().subscribe((_) => this.favorites = _ );
    this.app.getItems().subscribe((_) => this.foods);
    
  }

  ngOnInit() {
    
  }

  increase() {
    this.qte ++;
    this.mount = this.price * this.qte;
  }

  decrease() {
    this.qte >= 2 ? this.qte-- : this.qte = 1;
    this.mount - this.price >= this.price ? this.mount = this.mount - this.price: this.mount = this.price;
  }

  addToCart() {
    const distinct = this.foods.filter((e) => e?.name === this.food[0]?.name);

    const fd = {
      id: this.food[0]?.id,
      img: this.food[0]?.img,
      name: this.food[0]?.name,
      price: this.mount,
      qte: this.qte
    };


    if (distinct.length === 0) {
      this.app.addToCart(fd);
      this.presentToast('Added to Cart');
    }
    if (distinct.length > 0) {
      this.presentToast('Food already in the cart');
    }  

  }

  addToFavorite() {
    this.added = !this.added;
    const distinct = this.favorites.filter((e) => e?.name === this.food[0]?.name);
      if(this.added === true) {
          if (distinct.length === 0) {
            this.app.addToFavorites(this.food[0]);
            this.presentToast('Added to favorites');
          }
          if (distinct.length > 0) {
            this.presentToast('Food already favorites');
          }   
      }

      if(this.added === false) {
        this.presentToast('Food remove from favorites');
      }
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
