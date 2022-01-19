import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-update-house',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {
  // @ts-ignore
  house: House;

  categories : Category[] = []

  houseForm = new FormGroup({
    name: new FormControl(''),
    bathroom: new FormControl(''),
    categoryId: new FormControl('')
  });

  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute,
              // private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.houseService.findById(id).subscribe(res => {
        console.log(res)
        this.house = res
        this.houseForm = new FormGroup({
          name: new FormControl(res.name),
          bathroom: new FormControl(res.bathroom),
          categoryId: new FormControl(res.category?.id)
        });

      })
    })

    this.categoryService.getAll().subscribe(res => {
      this.categories = res
      console.log(res)
    })
  }

  updateHouse() {
    const house = {
      name: this.houseForm.value.name,
      bathroom: this.houseForm.value.bathroom,
      category: {
        id: this.houseForm.value.categoryId
      }
    }
    console.log(house)
    // @ts-ignore
    this.houseService.updateHouse(this.house.id, house).subscribe(() => {
      alert("Cập nhật thành công!")
      this.router.navigate(["/houses"])
    })
  }

  deleteHouse() {
    // @ts-ignore
    this.houseService.deleteHouse(this.house.id).subscribe(() => {
      alert("Xóa thành công!")
      this.router.navigate(["/houses"])
    })
  }
}
