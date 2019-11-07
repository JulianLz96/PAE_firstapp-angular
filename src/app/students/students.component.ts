import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less']
})
export class StudentsComponent implements OnInit {

  students:Array<Student> = [];

  studentName = "default";
  studentEmail = "default";

  student:Student = {
    name: '',
    email: ''
  }

  constructor(private studentService:StudentService) {
    console.log('Studentservice cons', this.studentService);
   }

  ngOnInit() {
    console.log('studentservice prop', this.studentService);
    this.students = this.studentService.getStudents();
  }

  addStudent(event?) {
    if(!this.student.name || !this.student.email) return;
    // console.log("ha sido clickeado", this.studentName);
    // this.students.push(this.studentName);
    // this.studentService.crearStudent(this.studentName, this.studentEmail);
    this.studentService.crearStudent(this.student);
    this.resetStudent();
  }

  triggerAddStudent(event) {

  }

  resetStudent() {
    this.student = {
      name: '',
      email: ''
    }
  }

}
