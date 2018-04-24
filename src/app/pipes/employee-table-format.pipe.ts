import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'employeeTableFormatter'})
export class EmployeeTableFormatter implements PipeTransform {
  transform(value: any, col:string) {
    if (value === undefined) {
      return '';
    }
    if (col === 'salary') {
      return '£ ' + value;
    } else if (col === 'birthDate') {
      let pipe = new DatePipe('en-UK');
      return pipe.transform(value, 'dd/MM/yyyy');
    }
    return value;
  }
}
