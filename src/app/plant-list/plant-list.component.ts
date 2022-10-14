import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

import { Plant } from '../plant/plant';
import { PlantService } from '../plant/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit, OnDestroy {

  plants?: Plant[];
  name: string = '';
  water: string = '';
  sun: string = '';
  toxic: string = '';

  sunOptions: string[] = ['no', 'low', 'high'];
  waterOptions: string[] = ['rarely', 'regularly', 'daily'];
  toxicOptions: string[] = ['yes', 'no'];

  debounce: Subject<string> = new Subject<string>();

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(name => this.name = name);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
