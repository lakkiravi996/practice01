import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo:any=[];
  todos:any=[
    'thiccnjskdbv kddnvlksd',
    'thiccnjskdbv kddnvlksd',
    'thiccnjskdbv kddnvlksd',
  ]
  
  constructor(){ }

  ngOnInit(): void {}
  add(){
this.todos.push(this.todo)
  }
  delete(index:number){
    this.todos.splice(index,1)
  }
}
