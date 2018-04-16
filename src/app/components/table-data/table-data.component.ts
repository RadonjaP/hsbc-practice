import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {

  @Input() private tableName: string;
  @Input() private data: any;
  @Input() private headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
