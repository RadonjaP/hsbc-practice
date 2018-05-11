import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { DataTableModule } from 'cust-component-library';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { EmployeeService } from './services/employee.service';

const routes: Routes = [
  {path: 'table', component: EmployeeTableComponent},
  {path: 'import-data', component: ImportDataComponent},
  {path: '**', redirectTo: '/table', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    ImportDataComponent,
    InsertEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
