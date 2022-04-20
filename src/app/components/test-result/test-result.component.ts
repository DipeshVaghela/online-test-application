import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TestResult } from 'src/app/interfaces/test-result';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css'],
})
export class TestResultComponent implements OnInit {
  constructor() {}
  @Input() testResult: TestResult = {
    fullName: '',
    score: 0,
    timeTaken: '',
  };

  @Output() goToHome: EventEmitter<any> = new EventEmitter<any>();
  @Output() retryTest: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}

  goToTheHome() {
    this.goToHome.emit();
  }
  retryTheTest() {
    this.retryTest.emit({ fullName: this.testResult.fullName });
  }
}
