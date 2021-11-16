import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/others/questions';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  questions: Questions[];

  constructor(private router: Router) {
    this.questions = [
      {
        id: 0,
        question: "How are you?",
        options: ["I am fine", "I am not fine", "I am good"],
        answer: "I am fine"
      },
      {
        id: 1,
        question: "How are you?",
        options: ["I am fine", "I am not fine", "I am good"],
        answer: "I am fine"
      },
      {
        id: 2,
        question: "How are you?",
        options: ["I am fine", "I am not fine", "I am good"],
        answer: "I am fine"
      },
      {
        id: 3,
        question: "How are you?",
        options: ["I am fine", "I am not fine", "I am good"],
        answer: "I am fine"
      },
      {
        id: 4,
        question: "How are you?",
        options: ["I am fine", "I am not fine", "I am good"],
        answer: "I am fine"
      }
    ]
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("hey");
    this.router.navigate(['../result']);
  }

}
