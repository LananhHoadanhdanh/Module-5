import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../service/house.service";
import {ActivatedRoute} from "@angular/router";
import {House} from "../../../model/house";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  // @ts-ignore
  house: House;

  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute,) { }

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

}
