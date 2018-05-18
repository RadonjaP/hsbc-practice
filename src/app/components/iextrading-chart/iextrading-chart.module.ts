import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IextradingChartComponent } from './iextrading-chart.component';
import { IextradingService } from '../../services/iextrading.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [IextradingService],
  exports: []
})
export class IextradingChartModule { }
