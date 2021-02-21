import { Component, OnInit } from '@angular/core';
import { AppUser } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.model);
  }

}
