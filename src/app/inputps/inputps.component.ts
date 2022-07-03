import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputps',
  templateUrl: './inputps.component.html',
  styleUrls: ['./inputps.component.scss'],
})
export class InputpsComponent implements OnInit {
  text: string = 'custom text';
  constructor() {}

  ngOnInit(): void {}
}
