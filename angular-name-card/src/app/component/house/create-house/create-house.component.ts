import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HouseService} from "../../../service/house.service";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  houseForm = new FormGroup({
    name: new FormControl(''),
    bathroom: new FormControl(''),
    categoryId: new FormControl('1'),
  });

  categories : Category[] = []

  constructor(private houseService: HouseService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res
      console.log(res)
    })
  }

  saveHouse() {
    const house = {
      name: this.houseForm.value.name,
      bathroom: this.houseForm.value.bathroom,
      category: {
        id: this.houseForm.value.categoryId
      }
    }
    console.log(house)

    // @ts-ignore
    this.houseService.saveHouse(house).subscribe(() => {
      alert("Thêm thành công!")
        this.router.navigate(["/houses"])
    })
  }
}
