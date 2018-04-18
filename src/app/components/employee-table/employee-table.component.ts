import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee }  from '../../models/employee';
import { TableHeader } from '../../models/table-header';

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

  public employees : Employee[]

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees = this.employeeService.getData();
  }

}
