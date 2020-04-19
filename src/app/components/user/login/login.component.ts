import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInvalid: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

  }

  forget() {

  }
}
