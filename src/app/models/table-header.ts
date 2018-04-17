export class TableHeader {

  private DIRECTION_ASCEND = 1;
  private DIRECTION_DESCEND = -1;

  id: string;
  name: string;
  sortDirection: number;

  constructor(id: string, name: string) {
    this.id = id;
    if (name == undefined || name == '') {
      name = id.toUpperCase();
    }
    this.name = name;
    this.sortDirection = this.DIRECTION_ASCEND;
  }

  public changeDirection() {
    this.sortDirection = this.sortDirection == this.DIRECTION_ASCEND ? this.DIRECTION_DESCEND : this.DIRECTION_ASCEND;
  }

}
