import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponentComponent implements OnInit {

  @Input() public data: any[];
  @Input() public displaySize: number;
  
  public index: number;
  public numberOfPages: number;

  @Output() changeIndexEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.numberOfPages = Math.ceil(this.data.length / this.displaySize);
    this.index = 1;
  }

  public changePage() {
    if (this.index >= 1 && this.index <= this.numberOfPages) {
      this.changeIndexEvent.emit({ index: this.index, displaySize: this.displaySize});
    }
  }

  public nextPage() {
    if (this.index < this.numberOfPages) {
      this.index++;
    }
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

  public previousPage() {
    if (this.index > 1) {
      this.index--;
    }
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

  public toBegining() {
    this.index = 1;
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

  public toEnd() {
    this.index = this.numberOfPages;
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

}
