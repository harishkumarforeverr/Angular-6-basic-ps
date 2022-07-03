import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {

  constructor(private svc: TestService) {
    this.svc.printToConsole('satish is good boy123');
  }
  ngOnInit(): void {
  }

}
