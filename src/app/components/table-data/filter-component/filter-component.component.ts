import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { FilterField } from '../../../models/filter-field';

@Component({
  selector: 'filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  @Input() private fields: FilterField[];
  @Input() private data: any[];

  private originalData: any[];

  @Output() filterDataEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.originalData = this.data;
  }

  public filterData() {
    let filteredData = this.originalData;
    let clearFilter = true;
    for (let field of this.fields) {
      if(field.value != undefined && field.value != '')  {
        clearFilter = false;
        filteredData = filteredData.filter(data =>
          data[field.id] == field.value);
      }
    }
    this.filterDataEvent.emit({'filteredData': filteredData});
  }

  public setOriginalData(data: any[]) {
    this.originalData = data;
  }

}
