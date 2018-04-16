import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mocks/mock-data';

Injectable()
export class EmployeeService {

  private employees = EMPLOYEES;

  public getData() {
    return this.employees;
  }

}
