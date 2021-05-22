import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private model = 'courses';

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    }, {
      id: 2,
      title: 'javascript really parts',
      description: 'worship will sentance',
      percentComplete: 50,
      favorite: false
    }
  ];

  constructor(private http: HttpClient) {

  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }


  update(course) {
    console.log('update');
  }

  delete(courseId) {
    console.log('delete');
  }


  all() {
    return this.http.get(this.getUrl());
  }


  find(courseId) {
    console.log('find');
  }

  private getUrl(){
    return `${BASE_URL}${this.model}`
  }

}
