import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  rei = "black";

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  change(str){
    this.rei = str;
  }

}
