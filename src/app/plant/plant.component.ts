import { Component, Input, OnInit } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: '[app-plant]',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @Input() plant?: Plant;

  constructor() { }

  ngOnInit(): void {
  }

}
