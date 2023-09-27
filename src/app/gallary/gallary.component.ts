import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsershareService } from '../usershare.service';
 import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit{
   
  userList:any=[];
  userForm!:FormGroup;
  id:any=[];
  name:any=[];

  constructor(private httpApi: HttpClient, private sharedService: UsershareService,
    
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name:['',Validators.required],
      id:['',Validators.maxLength],
      email:['',Validators.required],
      phone:['']
    })

    this.userList = [
      { id: 1, name: 'RavindraReddy', email: 'ravindra@gmail.com', phone: 9347778916 },
      { id: 2, name: 'nagendre', email: 'nagendra@gmail.com', phone: 9347778916},
      { id: 3, name: 'kalyan', email: 'kalyan@gmail.com', phone: 9347778916 },
      { id: 4, name: 'vijay', email: 'vijay@gmail.com', phone: 9347778916 },
      { id: 5, name: 'thriveni ', email: 'thriveni@gmail.com', phone: 9347778916 },
      { id: 6, name: 'jakeer ', email: 'jakeer@hotmail.com', phone: 9347778916 },
    ]

  }

  add() {
    console.log(this.id, this.name)
  }
  addUser(){
    this.userList.push(this.userForm.value);
    console.log(this.userForm)
    this.userForm.reset();
  }
  delete(i:number){
    this.userList.splice(i,1)
    
  }
} 