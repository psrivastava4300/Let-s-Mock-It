import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/others/chapter';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  chapters: Chapter[];

  constructor() { 
    this.chapters = [
      {
        id: 0,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 1,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 2,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 3,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 4,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 5,
        title: "Algebra",
        description: "Let's study about X, Y and Z. Let's study even more about it. what say?"
      },
      {
        id: 6,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 7,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 8,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 9,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 10,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 11,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 12,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 13,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      },
      {
        id: 14,
        title: "Algebra",
        description: "Let's study about X, Y and Z"
      }
    ]
  }

  ngOnInit(): void {
  }

}
