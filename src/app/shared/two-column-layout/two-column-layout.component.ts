import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-column-layout',
  templateUrl: './two-column-layout.component.html',
  styleUrls: ['./two-column-layout.component.css']
})
export class TwoColumnLayoutComponent implements OnInit {

  constructor() { }

  public title:string="SpaceX Launch Programs"

  ngOnInit(): void {
  }

}
