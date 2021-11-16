import { Component, OnInit } from '@angular/core';
import { Student } from 'src/others/student';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  students: Student[];

  constructor() { 
    this.students = [
      {
        id: 0,
        name: "Priyanka Srivastava",
        enrollment: 18104043,
        email: "psrivastava4300@gmail.com"
      },
      {
        id: 1,
        name: "Priyanka Srivastava",
        enrollment: 18104043,
        email: "psrivastava4300@gmail.com"
      },
      {
        id: 2,
        name: "Priyanka Srivastava",
        enrollment: 18104043,
        email: "psrivastava4300@gmail.com"
      },
      {
        id: 3,
        name: "Priyanka Srivastava",
        enrollment: 18104043,
        email: "psrivastava4300@gmail.com"
      }
    ]
  }

  ngOnInit(): void {
  }


}
