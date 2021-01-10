import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.page.html',
  styleUrls: ['./resto-detail.page.scss'],
})
export class RestoDetailPage implements OnInit {

  resto

  constructor(public service: DataService,private route: ActivatedRoute) { 
    this.route.params.subscribe(
      (_: any) => {
         this.resto = this.service.restos.filter((data: any) => data?.id == _?.id);
      }
    );
  }

  ngOnInit() {
  }

}
