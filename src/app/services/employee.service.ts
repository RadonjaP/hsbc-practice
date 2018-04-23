import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EMPLOYEES } from '../mocks/mock-data';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first'

Injectable()
export class EmployeeService {

  private employees = EMPLOYEES;

  constructor() {}

  public getData() {
    return this.employees;
  }

  public setData(employees: Employee[]) {
      this.employees = employees;
  }

  public setDataCsv(http: Http) {
    return http.get('../assets/imports/employees.csv')
    .map( data => {
      var results = this.processData((<any>data)._body);
      this.employees = results
      return this.employees;
    }, error => {
      console.log(error);
    }).first();
  }

  public processData(data: any) {
    let employees = data.split("\n");
    let tempEmployees = new Array<Employee>();
    for (let i = 0; i < employees.length; i++) {
      let emp = new Employee();
      var properties = employees[i].split(",");
      emp.id = Number(properties[0]);
      emp.name = properties[1];
      emp.lastname = properties[2];
      emp.birthDate = new Date(properties[3]);
      emp.job = properties[4];
      emp.salary = Number(properties[5]);
      tempEmployees.push(emp);
    }

    return tempEmployees;
  }

}
