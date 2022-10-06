import { SelectModule } from './../shared/components/select/select.module';
import { PlantModule } from './../plant/plant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantListComponent } from './plant-list.component';
import { filterPlants } from './filter-plants.pipe';

@NgModule({
  declarations: [
    PlantListComponent,
    filterPlants
  ],
  imports: [
    CommonModule,
    PlantModule,
    SelectModule
  ]
})
export class PlantListModule { }
