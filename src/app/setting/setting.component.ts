import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  constructor() {}
  router = [
    {
      path: 'profile',
      name: 'profile',
    },
    {
      path: 'contact',
      name: 'contact',
    },
  ];
  ngOnInit(): void {}
}
