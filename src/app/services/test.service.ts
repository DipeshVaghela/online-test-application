import { Injectable } from '@angular/core';
import { QuestionStatus } from '../interfaces/question-status';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  private Questions: QuestionStatus[] = [
    {
      queNo: 1,
      answered: false,
    },
    {
      queNo: 2,
      answered: false,
    },
    {
      queNo: 3,
      answered: false,
    },
    {
      queNo: 4,
      answered: false,
    },
    {
      queNo: 5,
      answered: false,
    },
    {
      queNo: 6,
      answered: false,
    },
    {
      queNo: 7,
      answered: false,
    },
    {
      queNo: 8,
      answered: false,
    },
    {
      queNo: 9,
      answered: false,
    },
    {
      queNo: 10,
      answered: false,
    },
    {
      queNo: 11,
      answered: false,
    },
    {
      queNo: 12,
      answered: false,
    },
    {
      queNo: 13,
      answered: false,
    },
    {
      queNo: 14,
      answered: false,
    },
    {
      queNo: 15,
      answered: false,
    },
    {
      queNo: 16,
      answered: false,
    },
    {
      queNo: 17,
      answered: false,
    },
    {
      queNo: 18,
      answered: false,
    },
    {
      queNo: 19,
      answered: false,
    },
    {
      queNo: 20,
      answered: false,
    },
  ];

  setAnsweredStatus(queNo: number, status: boolean) {
    this.Questions[queNo].answered = status;
  }
  getAnsweredStatus(queNo: number) {
    return this.Questions[queNo].answered;
  }
  resetAllAnsweredStatus() {
    this.Questions.forEach((q) => {
      q.answered = false;
    });
  }
}
