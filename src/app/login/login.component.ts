import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string = "";
  passwordInput: string = "";
  signedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isButtonEnabled() {
    if (this.usernameInput.length && this.passwordInput.length) {
      return true;
    }

    return false;
  }

  login() {
    this.signedIn = true;
    this.usernameInput = "";
    this.passwordInput = "";
  }

  getColor() {
    return this.signedIn ? "bg-success" : "bg-danger"
  }

}
