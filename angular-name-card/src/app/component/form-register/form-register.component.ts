import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/users";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  countries = ['Việt Nam', 'Nga', 'Mỹ', 'Nhật', 'Hàn']

  listUser: Users[] = [
    {
      email: 'rei@gmail.com',
      password: '123456',
      confirmPassword: '123456',
      country: 'Việt Nam',
      age: 20,
      gender: 'female',
      phone: '+8469001996'
    }
  ]

  user = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    country: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required, Validators.min(19)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern("^\\+84\\d{9,10}$")]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    console.log(this.user.value)
  }

  get email() {
    return this.user.get('email')
  }
}
