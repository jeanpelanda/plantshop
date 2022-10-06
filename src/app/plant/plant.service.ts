import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private httpClient: HttpClient) { }

  getPlants() {
    return this.httpClient.get<Plant[]>('http://localhost:3000/plants');
  }
}
