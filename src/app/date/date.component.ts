import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component-t1.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  message: string = '';
  someNumber: number = 10;

  constructor() {
    setInterval(() => {
      const DateObj = new Date();
      this.message =
        DateObj.toDateString() + '  ' + DateObj.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {}

  addTwoNumber(a:number, b:number){
    return a+b
  }
}
