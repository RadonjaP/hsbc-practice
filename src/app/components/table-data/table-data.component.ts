import { Component, OnInit, Input } from '@angular/core';
import { TableHeader } from '../../models/table-header';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {

  @Input() private tableName: string;
  @Input() private data: any;
  @Input() private headers: TableHeader[];

  constructor() { }

  ngOnInit() {
  }

  // Select row to process
  public selectRow(target) {
    console.log("selectRow() --> ")
  }

  // Used to sort data by header
  public sortHeader(header: TableHeader) {
    var id = header.id;
    var desc = header.sortDirection;
    this.data.sort(function(a, b) {
      let value = a[id] < b[id] ? 1 : a[id] > b[id] ? -1 : 0;
      // Change sort to opposite direction
      return value * desc;
    });
    header.changeDirection();
  }

  // Switch between header's glyphicons
  public getGlyphicon(header: TableHeader) {
    if (header.sortDirection == -1) {
      return 'glyphicon glyphicon-chevron-down';
    } else {
      return 'glyphicon glyphicon-chevron-up';
    }

  }


}
