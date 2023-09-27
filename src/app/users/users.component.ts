 import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { UsersshareService } from './../usersshare.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users: any;

  constructor(private http: HttpClient, private shareService:UsersshareService) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/users').subscribe(success => {
      this.users = success;
      console.log(this.users)
    }, (error) => {
      console.log(error)

    })
  }
 addUser(user:any){
  // this.shareService.addUser(user)

 }
}
