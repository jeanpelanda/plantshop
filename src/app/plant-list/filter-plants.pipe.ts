import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from '../plant/plant';

@Pipe({ name: 'filterPlants', pure: false })
export class FilterPlants implements PipeTransform {

  transform(plants: Plant[], nameQuery: string, water: string, sun: string, toxic: string) {

    nameQuery = nameQuery.trim().toLocaleLowerCase();

    if(nameQuery) {
      plants = plants.filter(plant => plant.name.toLocaleLowerCase().includes(nameQuery));
    }

    if(water.length) {
      plants = plants.filter(plant => plant.water.includes(water));
    }

    if(sun.length) {
      plants = plants.filter(plant => plant.sun.includes(sun));
    }

    if(toxic === 'yes') {
      plants = plants.filter(plant => plant.toxicity === false);
    }

    return plants;

  }

}
