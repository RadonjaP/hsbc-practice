import { Component, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private title = 'HSBC';

  constructor(private router: Router) {

  }

  public tabs = [
    { name: "Employee Table", href: "/table" },
    { name: "IEX Trading Chart", href: "/iextrading-chart"}
  ];

  public route(href) {
    this.router.navigate([href]);
  }

}
