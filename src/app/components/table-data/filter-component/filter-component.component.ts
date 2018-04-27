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
  @Input() private changedData: boolean;

  private originalData: any[];

  @Output() filterDataEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.originalData = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    // If model data is changed, then change original data
    if (changes.changedData) {
      this.originalData = changes.data.currentValue;
    }
    // Keep original data
    if (!changes.data.firstChange) {
      this.data = this.originalData;
    }
  }

  public filterData() {
    let filteredData = this.originalData;
    for (let field of this.fields) {
      if(field.value != undefined && field.value != '')  {
        filteredData = filteredData.filter(data => {
          return this.matchValue(data[field.id], field.value)
        });
      }
    }
    this.filterDataEvent.emit({'filteredData': filteredData});
  }

  private matchValue(val1: any, val2: any) {
    return String(val1).toLowerCase().includes(val2.toLowerCase());
  }

}
