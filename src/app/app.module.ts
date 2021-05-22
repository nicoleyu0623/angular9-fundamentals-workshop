import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import {MaterialModule} from "./material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoursesService} from "./shared/services/courses.service";
import {LessonsService} from "./shared/services/lessons.service";

@NgModule({
  //import modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],


  // components
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent
  ],


  // services
  providers: [CoursesService, LessonsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
