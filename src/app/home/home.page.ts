import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true
  };
  
  slides = [
    { img: '../../assets/img/1.jpg'}
  ];

  
  constructor() {}

  onSearchChange(event) {
    console.log(event.target.value);
  }

}
