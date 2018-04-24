import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { EmployeeTableFormatter } from './pipes/employee-table-format.pipe';
import { PaginationComponentComponent } from './components/table-data/pagination-component/pagination-component.component';
import { FilterComponentComponent } from './components/table-data/filter-component/filter-component.component';
import { ImportDataComponent } from './components/import-data/import-data.component';

const routes: Routes = [
  {path: 'table', component: EmployeeTableComponent},
  {path: 'import-data', component: ImportDataComponent},
  {path: '**', redirectTo: '/table', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    TableDataComponent,
    EmployeeTableFormatter,
    PaginationComponentComponent,
    FilterComponentComponent,
    ImportDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [EmployeeTableFormatter],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
