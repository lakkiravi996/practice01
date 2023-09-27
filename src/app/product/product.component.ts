import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductsharedService } from '../productshared.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: any;

  constructor(private http: HttpClient,private sharedservice:ProductsharedService ) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe(success => {
      this.products = success;
      console.log(this.products)
    }, (error) => {
      console.log(error)

    })
  }
  addToCart(product:any){
    this.sharedservice.add(product)

  }
}



