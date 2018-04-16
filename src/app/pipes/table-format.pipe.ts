import { Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'tableFormatter'})
export class TableFormatterPipe implements PipeTransform {
  transform(value: any, col:string) {
    if (col === 'salary') {
          return value + ' £';
    }
    return value;
  }
}
