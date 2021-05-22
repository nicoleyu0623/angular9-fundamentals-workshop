import {Component, OnInit} from '@angular/core';
import {LessonsService} from "../shared/services/lessons.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


// 1. create a lesson service
// 2. add the lessons service to app.module
// 3. inject lessons service into a component
// 4. move lessons to a service and consume in component


export class HomeComponent implements OnInit {

  welcomeMessage = "Hello workshop";
  themeColor = "red";
  currentLesson = null;
  courseLessons = null;

  updateColor() {
    console.log('update to salmon!')
    this.themeColor = 'salmon';
  }


  constructor(private lessonsService: LessonsService) {

  }

  selectLesson(lesson) {
    this.currentLesson = lesson;

  }


  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

}
