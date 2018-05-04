import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EMPLOYEES } from '../mocks/mock-data';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

Injectable()
export class EmployeeService {

  private employees = [];
  public dataSource = new BehaviorSubject(this.employees);

  constructor() {
    this.employees = EMPLOYEES;
    this.dataSource = new BehaviorSubject(this.employees);
  }

  public getData() {
    return this.employees;
  }

  public setData(employees: Employee[]) {
      this.employees = employees;
  }

  public setDataCsv(http: Http) {
    return http.get('../assets/imports/employees.csv')
    .subscribe( data => {
      var results = this.processData((<any>data)._body);
      this.setData(results);
      this.dataSource.next(results);
      return results;
    }, error => {
      console.log(error);
      return null;
    });
  }

  public insertEmployee(employee: Employee) {
    employee.id = this.getEmployeeId();
    this.employees.push(employee);
    this.dataSource.next(this.employees);
  }

  private getEmployeeId() {
    return this.employees.length + 1;
  }

  // Parse data in csv format to array of Employee Objects
  private processData(data: any) {
    let employees = data.split("\n");
    let tempEmployees = new Array<Employee>();
    for (let i = 0; i < employees.length - 1; i++) {
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
