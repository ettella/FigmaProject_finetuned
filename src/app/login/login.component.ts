import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  text!: string;
  username!: string;
  // myForm!: boolean ;

  constructor(){}

  ngOnInit(): void {
  }
  

}