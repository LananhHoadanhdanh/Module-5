import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  rei = "black";

  red = 0;
  lime = 0;
  blue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  change(str){
    this.rei = str;
  }

}
