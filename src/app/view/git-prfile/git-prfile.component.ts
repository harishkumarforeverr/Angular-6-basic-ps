import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-prfile',
  templateUrl: './git-prfile.component.html',
  styleUrls: ['./git-prfile.component.scss'],
})
export class GitPrfileComponent implements OnInit {
  userName: string = '';
  res: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  SubmitHandler() {
    let obs = this.http.get('https://api.github.com/users/' + this.userName);
    obs.subscribe((response) => {
      this.res = response;
      console.log(this.res);
    });
  }
}
