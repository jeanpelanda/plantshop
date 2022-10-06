import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantComponent } from './plant.component';

@NgModule({
  declarations: [
    PlantComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PlantComponent
  ]
})
export class PlantModule { }
