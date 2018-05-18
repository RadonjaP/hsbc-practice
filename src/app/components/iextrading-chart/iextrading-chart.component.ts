import { Component, OnInit } from '@angular/core';
import { IextradingService } from '../../services/iextrading.service';
import { TableHeader } from 'cust-component-library';

@Component({
  selector: 'live-chart',
  templateUrl: './iextrading-chart.component.html',
  styleUrls: ['./iextrading-chart.component.css', '../../app.component.css']
})
export class IextradingChartComponent implements OnInit {

  public chartData = new Array<any>();
  public companies = new Array<any>();
  public companySelect = new Array<any>();
  public companySymbol = "";
  public companyName = "";

  public headers = [
    new TableHeader('date', 'Date'),
    new TableHeader('open', 'Open'),
    new TableHeader('change', 'Change'),
    new TableHeader('high', 'High'),
    new TableHeader('low', 'Low'),
    new TableHeader('volume', 'Volume'),
    new TableHeader('vwap', 'VWAP'),
  ];

 // Chart properties
  public id = 'vwap_chart';
  public width = "65%";
  public height = "80%";
  public type = 'area2d';
  public dataFormat = 'json';
  public dataSource = {};

  constructor(private iextradingService: IextradingService) {
    this.dataSource = {
      "chart": {
        "caption": "VWAP",
        "subCaption": "Volume Weighted Average Price during one month period",
        "theme": "ocean",
        "xaxisname": "Date",
        "yaxisname": "Volume",
      },
      "data": this.chartData
    }
  }

  ngOnInit() {
    this.iextradingService.getCompanies().subscribe(res => {
      this.companies = res.json().slice(0, 10);
      this.companySelect = this.companies;
    });;
  }

  public loadCompanyChart() {
    this.iextradingService.getCompanyChart(this.companySymbol).subscribe( res => {
      this.chartData = res.json();
      this.dataSource["data"] = this.prepareForChart(res.json().chart);
    });
  }

  public checkChange(header: TableHeader, change: number) {
    if (header.id != "change") {
      return "";
    }
    return change >= 0 ? "change-plus" : "change-minus";
  }

  public searchCompany() {
    this.companySelect = this.companies.filter(company => {
      return String(company.name).toLowerCase().includes(this.companyName.toLowerCase());
    });
  }

  private prepareForChart(results) {
    let prepArray = [];
    for (let data of results) {
      prepArray.push({"label": data.date, "value": parseFloat(data.vwap).toFixed(2)});
    }
    return prepArray;
  }

}
