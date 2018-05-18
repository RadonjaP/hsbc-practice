import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IextradingService {

  private root: string = "https://api.iextrading.com/1.0";

  constructor(private http: Http) { }

  public getCompanies() {
    let results = [];
    let url = this.root + "/ref-data/symbols";
    return this.http.get(url);
  }

  public getCompanyChart(symbol: string) {
    let results = [];
    let url = this.root + "/stock/"+ symbol +"/batch?types=chart";
    return this.http.get(url);
  }

}
