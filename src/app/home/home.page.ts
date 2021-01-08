import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
     slidesPerView: 3.2,
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
    { img: '../../assets/img/f1.jpg', price: 12.5, name: 'Donuts'},
    { img: '../../assets/img/f2.jpg', price: 25, name: 'Frites'},
    { img: '../../assets/img/f3.jpg', price: 26, name: 'Vegane'},
    { img: '../../assets/img/f4.jpg', price: 23, name: 'Brochette'},
    { img: '../../assets/img/f5.jpg', price: 70, name: 'Poulet'},
    { img: '../../assets/img/f6.jpg', price: 100, name: 'Melange'},
  ];


  categories = [
    { img: '', name: 'Grains'},
    { img: '', name: 'Sandwiches'},
    { img: '', name: 'Vegetables' },
    { img: '', name: 'Carnivores' },
  ];

  
  constructor() {}

  onSearchChange(event) {
    console.log(event.target.value);
  }

}
