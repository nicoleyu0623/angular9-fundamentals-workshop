import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../shared/services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //1. display courses in ngfor

  //2. event handler to select course

  //3. display raw json of selected course

  currentCourse = null;
  courses = null;

  public selectCourse(course) {
    this.currentCourse = course;
  }


  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.currentCourse = emptyCourse;
  }


  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.loadCourses());
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId);
  }


  loadCourses(){
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

}
