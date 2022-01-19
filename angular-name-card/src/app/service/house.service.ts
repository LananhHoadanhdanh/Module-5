import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {House} from "../model/house";

const API_URL = 'http://localhost:8080/houses'

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(API_URL);
  }

  saveHouse(house: House): Observable<House> {
    return this.http.post<House>(API_URL, house);
  }

  findById(id: string): Observable<House> {
    return this.http.get<House>(`${API_URL}/${id}`);
  }

  updateHouse(id: string, house: House): Observable<House> {
    return this.http.put<House>(`${API_URL}/${id}`, house);
  }

  deleteHouse(id: string) {
    return this.http.delete<House>(`${API_URL}/${id}`);
  }
}
