import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spacex-view',
  templateUrl: './spacex-view.component.html',
  styleUrls: ['./spacex-view.component.css']
})
export class SpacexViewComponent implements OnInit {

  constructor() { }
  @Input() spaceProgList:Observable<any>

  ngOnInit(): void {
  }

}
