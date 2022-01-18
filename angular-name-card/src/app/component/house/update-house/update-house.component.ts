import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-house',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {
  // @ts-ignore
  house: House;

  houseForm = new FormGroup({
    name: new FormControl(''),
    bathroom: new FormControl('')
  });

  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.houseService.findById(id).subscribe(res => {
        console.log(res)
        this.house = res
      })
    })
  }

  updateHouse() {
    const house = this.houseForm.value
    console.log(house)
    // @ts-ignore
    this.houseService.updateHouse(this.house.id, house).subscribe(() => {
      alert("Cập nhật thành công!")
    })
  }

  deleteHouse() {
    // @ts-ignore
    this.houseService.deleteHouse(this.house.id).subscribe(() => {
      alert("Xóa thành công!")
    })
  }
}
