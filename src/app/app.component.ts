import { Component, OnInit } from '@angular/core';
import {AppService } from './app.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'test-project';
  spaceProgList:Observable<any>;
  public filterObj:any = [
    {
      "filterTitle":"Launch Year",
      "filters": ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      'activeFilter':''
    },
    {
      "filterTitle":"Successful Launch",
      "filters": ['true','false'],
      'activeFilter': ''
    },
    {
      "filterTitle":"Successful Landing",
      "filters": ['true','false'],
      'activeFilter': ''
    }
  ];
  constructor(private service:AppService,private route:Router, private activeRoute: ActivatedRoute,private  location:Location){}

  ngOnInit(){
    this.activeRoute.queryParams.subscribe(params => {
      this.filterObj[0].activeFilter = params['launch_year'] || '';
      this.filterObj[1].activeFilter = params['launch_Success'] || '';
      this.filterObj[2].activeFilter = params['land_success'] || '';
      this.spaceProgList =this.service.fetchSpaceProgList(this.filterObj);
    });

    
  }
  filterList(filter){
    this.route.navigate([],{relativeTo: this.activeRoute, queryParams: 
      {
        launch_Success:this.filterObj[1].activeFilter,land_success:this.filterObj[2].activeFilter,launch_year:this.filterObj[0].activeFilter
      },
      replaceUrl: true,})
    this.spaceProgList = this.service.fetchSpaceProgList(this.filterObj);
  }
}
