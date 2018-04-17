export class TableHeader {

  static readonly DIRECTION_ASCEND = 1;
  static readonly DIRECTION_DESCEND = -1;

  id: string;
  name: string;
  sortDirection: number;

  constructor(id: string, name: string) {
    this.id = id;
    if (name == undefined || name == '') {
      name = id.toUpperCase();
    }
    this.name = name;
    this.sortDirection = TableHeader.DIRECTION_ASCEND;
  }

  public changeDirection() {
    this.sortDirection = this.sortDirection == TableHeader.DIRECTION_ASCEND ? TableHeader.DIRECTION_DESCEND : TableHeader.DIRECTION_ASCEND;
  }

}
