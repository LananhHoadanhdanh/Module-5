import {Component, OnInit} from '@angular/core';
import {House} from "../../../model/house";
import {HouseService} from "../../../service/house.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  houses: House[] = [
    {
      id: '',
      name: '',
      bathroom: '',
      category: {
        id: '',
        name: ''
      }
    }
  ]

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.houseService.getAll().subscribe(res => {
      this.houses = res
      console.log(res)
    })
  }
}
