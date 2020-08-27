import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  public title="Filters";
  @Output() filteredObj = new EventEmitter()
  @Input() filterObj:any[];

  ngOnInit(): void {
    console.log(this.filterObj);

  }

  filterProgList(filterTitle, filtered){
    this.filterObj.forEach(filter=>{
      if(filter.filterTitle === filterTitle && filter.activeFilter === filtered){
        filter.activeFilter = '';
      }
      else if(filter.filterTitle === filterTitle){
        filter.activeFilter = filtered;
      }
    })
    this.filteredObj.emit('filter');
  }

}
