import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  food: any;

  constructor(private route: ActivatedRoute, private service: DataService) {
    
    this.route.params.subscribe(
      (_: any) => {
         this.food = this.service.foods.filter((data: any) => data?.id == _?.id);
      }
    );
  }

  ngOnInit() {
   
  }

}
