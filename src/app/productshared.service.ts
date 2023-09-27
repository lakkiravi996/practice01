import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsharedService {

  constructor() { }
  sharedProduct = new BehaviorSubject('');
  currentProduct = this.sharedProduct.asObservable();

  add(prod:any){
    
    this.sharedProduct.next(prod)
  }
  
}
