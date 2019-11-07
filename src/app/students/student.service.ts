import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Array<Student> = [{
    name: 'fulano de tal', email: 'sadasdad'
  }];

  constructor() { }

  getStudents() {
    console.log('tracer estudiantes');
    return this.students;
  }

  crearStudent(student:Student) {
    // console.log(name, email);
    this.students.push(student);
  }
}
