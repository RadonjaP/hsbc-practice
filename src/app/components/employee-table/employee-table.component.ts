import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Employee }  from '../../models/employee';
import { Http, HttpModule } from '@angular/http';
import { EmployeeService } from '../../services/employee.service';
import { TableHeader, FilterField } from 'cust-component-library';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.style.css', '../../app.component.css'],
  providers: []
})

export class EmployeeTableComponent implements OnInit {

  public headers = [
    new TableHeader('id', 'Id'),
    new TableHeader('name', 'Name'),
    new TableHeader('lastname', 'Last Name'),
    new TableHeader('birthDate', 'Birth Date'),
    new TableHeader('job', 'Job'),
    new TableHeader('salary', 'Salary')];

  public filterFields = [
    new FilterField('id', 'Id'),
    new FilterField('name', 'Name'),
    new FilterField('job', 'Job'),
    new FilterField('salary', 'Salary')
  ];

  public employees : Employee[]

  constructor(public employeeService: EmployeeService, private http: Http) {
  }

  ngOnInit() {
    this.employeeService.dataSource.subscribe(employees => {
      this.employees = employees;
    });
  }

  public selectRowImplementation($event) {
    let employee = $event.row;
    console.log("Employee selected: " + employee.name + " " + employee.lastname);
  }

  public removeRowImplementation($event) {
    let employee = $event.row;
    this.employeeService.removeEmployee(employee);
  }

  public modifyRowImplementation($event) {
    let employee = $event.row;
    console.log("Employee modify: " + employee.name + " " + employee.lastname);
  }

  public importCsvData() {
      this.employeeService.setDataCsv(this.http);
  }

}
