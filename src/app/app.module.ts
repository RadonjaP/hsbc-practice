import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TableFormatterPipe } from './pipes/table-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    TableDataComponent,
    TableFormatterPipe
  ],
  imports: [
    BrowserModule,
  ],
  exports: [TableFormatterPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
