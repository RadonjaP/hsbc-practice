import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee }  from '../../models/employee';
import { TableHeader } from '../../models/table-header';
import { FilterField } from '../../models/filter-field';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: [],
  providers: [EmployeeService]
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
    new FilterField('job', 'Job')
  ]
  public employees : Employee[]

  constructor(private employeeService: EmployeeService, private http: Http) {
  }

  ngOnInit() {
    this.employees = this.employeeService.getData();
  }

  public selectRowImplementation($event) {
    let employee = $event.row;
    console.log("Employee selected: " + employee.name + " " + employee.lastname);
  }

  public importCsvData() {
      this.employeeService.setDataCsv(this.http).subscribe(data => {
        this.employees = data;
      });
  }

}
