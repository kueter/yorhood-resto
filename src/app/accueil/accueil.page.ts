import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  slidesOptions = {
    // initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,

    slidesPerView: 1.2,
   
  };

  slidesOpts = {
     // initialSlide: 0,
     direction: 'horizontal',
     speed: 300,
     // effect: slide,
     slidesPerView: 3.3,
  };
  
  slidesOpt = {
    // initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    slidesPerView: 4,
 };

 


  constructor(private router: Router, public service: DataService) { }

  ngOnInit() {
  }

  detailfood(id: number) {
    this.router.navigate(['/food-detail', id]);
  }

  detailresto(id: number) {
    this.router.navigate(['/resto-detail',id]);
  }

}
