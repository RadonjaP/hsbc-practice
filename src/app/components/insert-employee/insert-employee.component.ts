import { Component, OnInit } from '@angular/core';
import { Employee }  from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css'],
  providers: []
})
export class InsertEmployeeComponent implements OnInit {

  public emp = new Employee();

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {}

  public insertEmployee() {
    this.employeeService.insertEmployee(this.emp);
    this.printData();
    this.emp = new Employee();
  }

  private printData() {
    console.log('Inserted: ' + this.emp.name + ' ' + this.emp.lastname + ' ' + this.emp.birthDate);
  }

}
