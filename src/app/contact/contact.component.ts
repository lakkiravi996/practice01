import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

 
})
export class ContactComponent  implements OnInit{
  id='';
  name='';
  phone='';
  gender='';
  address='';
   studentsList:any=[
   {'id':1,'name':'RavindraReddy','gender':'male','phone':9347778916,'address':'payalakuntla'},
   {'id':2,'name':'kalyan','gender':'male','phone':901924985,'address':'matam'},
   {'id':3,'name':'Nagendra','gender':'male','phone':9347778916,'address':'Bainapalle'},
   {'id':4,'name':'Vijay','gender':'male','phone':901924985,'address':'Bainapalle'}
  ];
   constructor(){}
 ngOnInit(): void {
   }
   addStudent(){
   console.log(this.id,this.name, this.phone, this.gender, this.address)
      const student = {'id':this.id, 'name':this.name, 'phone':this.phone, 'gender':this.gender, 'address':this.address}
     console.log(student)
  this.studentsList.push(student);
  this.reset();
  }
  reset(){
    this.id='';
    this.name='';
  this.phone='';
this.gender='';
this.address=''; 
 }
  
  delete(i:number){
    this.studentsList.splice(i,1)
    
  }
}