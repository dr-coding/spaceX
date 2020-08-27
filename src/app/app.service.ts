import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  fetchSpaceProgList(data){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+data[1].activeFilter+'&land_success='+data[2].activeFilter+'&launch_year='+data[0].activeFilter)

  }
}
