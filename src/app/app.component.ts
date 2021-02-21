import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fashionclient';
  users: AppUser;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.http.get<AppUser>('https://localhost:5001/api/users').subscribe(
      (response: AppUser) => {
        this.users = response;
      }, error => {
        console.log(error);
      }
    );
  }

}

export class AppUser{
  Id: number;
  UserName: string;
}
