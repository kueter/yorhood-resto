import { Component, HostListener, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, public service: DataService) {
    
    this.route.params.subscribe(
      (_: any) => {
         this.food = this.service.foods.filter((data: any) => data?.id == _?.id);
      }
    );
  }

  ngOnInit() {
   
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if(document.documentElement.scrollTop >= 47) {
      this.reduce = true;
    }

    if(document.documentElement.scrollTop < 47) {
      this.reduce = false;
    }
  }

}
