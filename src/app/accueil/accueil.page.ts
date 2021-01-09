import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    spaceBetween: 8,
    slidesPerView: 1.2,
    freeMode: true,
    loop: true
  };

  slidesOpts = {
     // initialSlide: 0,
     direction: 'horizontal',
     speed: 300,
     // effect: slide,
     spaceBetween: 1,
     slidesPerView: 3.3,
     freeMode: true,
     loop: true
  };
  
  slidesOpt = {
    // initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    loop: true
 };

  slides = [
    { img: '../../assets/img/1.jpg'},
    { img: '../../assets/img/2.jpg'},
    { img: '../../assets/img/3.jpg'},
    { img: '../../assets/img/4.jpg'},
    { img: '../../assets/img/5.jpg'},
  ];

  foods = [
    {id: 1, img: '../../assets/img/f1.jpg', price: 12.5, name: 'Donuts'},
    {id: 2, img: '../../assets/img/f2.jpg', price: 25, name: 'Frites'},
    {id: 3, img: '../../assets/img/f3.jpg', price: 26, name: 'Vegane'},
    {id: 4, img: '../../assets/img/f4.jpg', price: 23, name: 'Brochette'},
    {id: 5, img: '../../assets/img/f5.jpg', price: 70, name: 'Poulet'},
    {id: 6, img: '../../assets/img/f6.jpg', price: 100, name: 'Melange'},
  ];

  categories = [
    { img: '../../assets/img/waste.png', name: 'Grains'},
    { img: '../../assets/img/fast-food.png', name: 'Sandwiches'},
    { img: '../../assets/img/hamburger.png', name: 'Hangburger' },
    { img: '../../assets/img/pizza.png', name: 'Pizza' },
    { img: '../../assets/img/fast-food_1.png', name: 'Foody' },
  ];

  populars = [
    { img: '../../assets/img/5.jpg', name: 'Home cooking exp', avis: 4},
    { img: '../../assets/img/6.jpg', name: 'Yorhood resto', avis: 3},
    { img: '../../assets/img/3.jpg', name: 'La perla', avis: 2},
    { img: '../../assets/img/4.jpg', name: 'Peperon', avis: 3},
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  detail(id: number) {
    this.router.navigate(['/food-detail', id]);
  }

}
