import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TableFormatterPipe } from './pipes/table-format.pipe';
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    TableDataComponent,
    TableFormatterPipe,
    PaginationComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [TableFormatterPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
