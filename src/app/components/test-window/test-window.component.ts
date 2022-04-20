import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { TestService } from 'src/app/services/test.service';
import { TimerService } from 'src/app/services/timer.service';

import Questions from '../../../assets/questions/questions.json';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css'],
})
export class TestWindowComponent implements OnInit {
  constructor(
    private testService: TestService,
    private timerService: TimerService
  ) {}

  questions: Question[] = [];
  activeQuestionNo: number = 1;
  resultArray: any[] = new Array(20);
  score: number = 0;

  @Output() finishTest: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.timerService.startTimer();
    this.questions = Questions;
    for (let i = 0; i < this.resultArray.length; i++) {
      this.resultArray[i] = 0;
    }
  }

  // method to get info of QuestionService
  getAnsweredStatus(i: number) {
    return this.testService.getAnsweredStatus(i);
  }

  // method to get info of QuestionService
  getTimerSecond() {
    if (this.timerService.timerSecond < 10)
      return '0' + this.timerService.timerSecond;
    else return this.timerService.timerSecond;
  }
  getTimerMinute() {
    // if time is finished
    if (
      this.timerService.timerMinute == 0 &&
      this.timerService.timerSecond == 0
    ) {
      this.submit();
      return '00';
    }
    // if time is not finished
    else {
      if (this.timerService.timerMinute < 10) {
        if (this.timerService.timerMinute < 0) {
          return '00';
        }
        return '0' + this.timerService.timerMinute;
      } else return this.timerService.timerMinute;
    }
  }
  getTotalTimeTaken() {
    return `${(this.timerService.totalTimeTaken / 60) | 0} Minutes ${
      this.timerService.totalTimeTaken % 60
    } Seconds`;
  }
  // Question changes methods
  goToPreviousQue() {
    if (this.activeQuestionNo > 1) {
      this.activeQuestionNo--;
    }
  }

  goToNextQue() {
    if (this.activeQuestionNo < 20) {
      this.activeQuestionNo++;
    }
  }

  goToQuestion(i: number) {
    this.activeQuestionNo = i + 1;
  }

  // Method to check correctness of question
  isCorrect($event: any) {
    if ($event.isCorrect) {
      this.resultArray[$event.questionNo] = 1;
    } else {
      this.resultArray[$event.questionNo] = 0;
    }
    this.testService.setAnsweredStatus($event.questionNo, true);
    this.countScore();
  }

  // Method to check question is ansewered or not
  isAnswered(i: number) {
    return this.testService.getAnsweredStatus(i);
  }

  // Method to clear selection
  clearSelection(id: number) {
    this.testService.setAnsweredStatus(id, false);
  }

  // Count total score
  countScore() {
    this.score = 0;
    for (let i = 0; i < this.resultArray.length; i++) {
      this.score += this.resultArray[i];
    }
  }

  // submit the test
  submit() {
    this.timerService.stopTimer();
    this.countScore();
    this.finishTest.emit({
      score: this.score,
      timeTaken: this.getTotalTimeTaken(),
    });
  }
}
