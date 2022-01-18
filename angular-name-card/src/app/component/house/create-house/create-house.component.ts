import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HouseService} from "../../../service/house.service";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  houseForm = new FormGroup({
    name: new FormControl(''),
    bathroom: new FormControl('')
  });

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
  }

  saveHouse() {
    const house = this.houseForm.value
    console.log(house)
    // @ts-ignore
    this.houseService.saveHouse(house).subscribe(() => {
      alert("Thêm thành công!")
    })
  }
}
