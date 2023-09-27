import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPassword = true;
  constructor() { }
  ngOnInit(): void {
  }

  showPassword() {
    this.isPassword = !this.isPassword;
  }
}