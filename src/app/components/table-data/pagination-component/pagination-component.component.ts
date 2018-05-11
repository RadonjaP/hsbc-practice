import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

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
    this.index = 1;
    this.numberOfPages = this.findNumberOfPages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange) {
      this.index = 1;
      this.numberOfPages = this.findNumberOfPages();
    }
  }

  public changePage() {
    if (this.index < 1) {
      this.index = 1;
    }
    if (this.index > this.numberOfPages) {
      this.index = this.numberOfPages;
    }
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

  public nextPage() {
    this.index = this.index < this.numberOfPages? ++this.index : this.numberOfPages;
    this.changeIndexEvent.emit({index: this.index, displaySize: this.displaySize});
  }

  public previousPage() {
    this.index = this.index > 1? --this.index : 1;
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

  public findNumberOfPages() {
    return Math.ceil(this.data.length / this.displaySize);
  }

}
