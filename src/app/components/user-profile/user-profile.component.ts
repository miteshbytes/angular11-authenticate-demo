import { Component, OnInit } from '@angular/core';
import { getUserData } from 'src/app/utility/authManager';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser: any = [];

  constructor() { }

  ngOnInit(): void {
    this.currentUser = getUserData();
  }

}
