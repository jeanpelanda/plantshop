import { PlantListModule } from './plant-list/plant-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
