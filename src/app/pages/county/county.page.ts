import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//https://code.highcharts.com/mapdata/

@Component({
  selector: 'app-county',
  templateUrl: './county.page.html',
  styleUrls: ['./county.page.scss'],
})
export class CountyPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
