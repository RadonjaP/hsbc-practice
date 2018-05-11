import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
})
export class ImportDataComponent implements OnInit {

  constructor(employeeService: EmployeeService) { }

  ngOnInit() {
  }

  public importCsv() {
    var results = [];

    var fileInput = document.getElementById("csv_file");
    var file = (<HTMLInputElement>fileInput).files[0];
    var reader = new FileReader();

    reader.onload = function(e: any) {
      console.log(e.target.result);
      results = e.target.result.split('\n');
    };

    reader.readAsText(file);

  }

}
