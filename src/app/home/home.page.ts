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
     spaceBetween: 8,
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
    {img: '../../assets/img/f1.jpg'},
    {img: '../../assets/img/f2.jpg'},
    {img: '../../assets/img/f3.jpg'},
    {img: '../../assets/img/f4.jpg'},
    {img: '../../assets/img/f5.jpg'},
    {img: '../../assets/img/f6.jpg'},
  ];

  
  constructor() {}

  onSearchChange(event) {
    console.log(event.target.value);
  }

}
