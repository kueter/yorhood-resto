import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.page.html',
  styleUrls: ['./resto-detail.page.scss'],
})
export class RestoDetailPage implements OnInit {

  resto: any;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    slidesPerView: 1.5
  };

  constructor(public service: DataService,private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(
      (_: any) => {
         this.resto = this.service.restos.filter((data: any) => data?.id == _?.id);
      }
    );
  }

  ngOnInit() {
  }

  toCart() {
    this.router.navigateByUrl('/shopping-cart');
  }


  showMenu(id: any) {
    this.router.navigate(['/resto-menu', id]);
  }

}
