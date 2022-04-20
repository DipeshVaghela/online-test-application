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
      isAnswerCorrect: false,
    },
    {
      queNo: 2,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 3,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 4,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 5,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 6,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 7,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 8,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 9,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 10,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 11,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 12,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 13,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 14,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 15,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 16,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 17,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 18,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 19,
      answered: false,
      isAnswerCorrect: false,
    },
    {
      queNo: 20,
      answered: false,
      isAnswerCorrect: false,
    },
  ];

  setAnsweredStatus(queNo: number, status: boolean) {
    this.Questions[queNo].answered = status;
  }
  getAnsweredStatus(queNo: number) {
    return this.Questions[queNo].answered;
  }
}
