import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './address/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // user: User = new User();
  // constructor() {
  //   this.user.name = 'harish';
  //   this.user.desgination = 'React.js developer';
  //   this.user.address = 'shiva thanda navipet';
  //   this.user.phone = ['12345', '6789'];
  // }
  router = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: 'setting',
      name: 'setting',
    },
  ];
  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole('harish is good boy123');
  }
  ngOnInit(): void {}
}
