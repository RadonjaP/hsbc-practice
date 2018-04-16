import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee }  from '../../models/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  providers: [EmployeeService]
})
export class EmployeeTableComponent implements OnInit {

  public employees : Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees = this.employeeService.getData();
  }

}
