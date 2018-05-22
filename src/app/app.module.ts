import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { DataTableModule } from 'cust-component-library';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { EmployeeService } from './services/employee.service';
import { IextradingChartComponent } from './components/iextrading-chart/iextrading-chart.component';
import { IextradingChartModule } from './components/iextrading-chart/iextrading-chart.module';

const routes: Routes = [
  {path: 'table', component: EmployeeTableComponent},
  {path: 'iextrading-chart', component: IextradingChartComponent},
  {path: '**', redirectTo: '/table', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    InsertEmployeeComponent,
    IextradingChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DataTableModule,
    IextradingChartModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
