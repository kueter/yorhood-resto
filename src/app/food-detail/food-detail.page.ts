import { Component, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, public service: DataService) {
    
    this.route.params.subscribe(
      (_: any) => {
         this.food = this.service.foods.filter((data: any) => data?.id == _?.id);
         this.price = this.food[0]?.price;
          this.mount = this.price;
      }
    );
    
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
    const fd = {
      id: this.food[0]?.id,
      img: this.food[0]?.img,
      name: this.food[0]?.name,
      price: this.mount,
      qte: this.qte
    };

    console.log(fd);
  }
 
}
