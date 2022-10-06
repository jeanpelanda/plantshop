import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Plant } from '../plant/plant';
import { PlantService } from '../plant/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plants?: Plant[];
  name: string = '';
  water: string = '';
  sun: string = '';
  toxic: string = '';

  sunOptions: string[] = ['no', 'low', 'high'];
  waterOptions: string[] = ['rarely', 'regularly', 'daily'];
  toxicOptions: string[] = ['yes', 'no'];

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }

  onKeyUp(target: any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.name = element.value;
    }
  }

}
