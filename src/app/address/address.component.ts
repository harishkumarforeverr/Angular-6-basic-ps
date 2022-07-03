import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  bool: boolean = false;
  @Input('user') user: User = {
    name: '1',
    desgination: '1',
    address: 'ss',
    phone: ['12222222'],
  };
  constructor() {}

  ngOnInit(): void {}
  showTheAddress = () => {
    this.bool = !this.bool;
  };
}
