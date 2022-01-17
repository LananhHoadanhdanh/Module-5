import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  callingFunction() {
    console.log(this.bioSection.value);
  }

}
