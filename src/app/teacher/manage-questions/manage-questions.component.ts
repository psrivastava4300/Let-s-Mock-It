import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/others/questions';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {

  questions: Questions[];

  constructor() {
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

}
