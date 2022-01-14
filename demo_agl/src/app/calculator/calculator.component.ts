import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  first = 0;
  second = 0;
  ope = "+";
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cal() {
    switch (this.ope) {
      case "+":
        this.result = +this.first + +this.second;
        break;
      case "-":
        this.result = +this.first - +this.second;
        break;
      case "*":
        this.result = +this.first * +this.second;
        break;
      case "/":
        this.result = +this.first / +this.second;
        break;
    }
  }

}

