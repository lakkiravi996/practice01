import { Component, OnInit } from '@angular/core';
import { ProductsharedService } from './productshared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products:any=[];
  constructor(private pservice:ProductsharedService ){}
  ngOnInit(): void {
    this.pservice.sharedProduct.subscribe(res=>{
      if(res !==''){
        this.products.push(res);
      }
    })
    
  }

  }
    

