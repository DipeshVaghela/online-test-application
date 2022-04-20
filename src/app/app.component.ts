import { Component } from '@angular/core';
import { TestResult } from './interfaces/test-result';
import { TestStatusCode } from './test-result-code';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  testStatus: number = TestStatusCode.NOT_STARTED;
  fullName: string = '';
  testResult: TestResult = {
    fullName: '',
    score: 0,
    timeTaken: '',
  };

  startTest($event: any) {
    this.fullName = $event.fullName;
    this.testStatus = TestStatusCode.STARTED;
  }
  finishTest($event: any) {
    this.testResult = {
      fullName: this.fullName,
      score: $event.score,
      timeTaken: $event.timeTaken,
    };
    setTimeout(() => {
      this.testStatus = TestStatusCode.FINISHED;
    }, 200);
  }

  goToHome() {
    this.testStatus = TestStatusCode.NOT_STARTED;
  }

  retryTest($event: any) {
    this.fullName = $event.fullName;
    this.testStatus = TestStatusCode.STARTED;
  }
}
