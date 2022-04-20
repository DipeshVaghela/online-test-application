import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Output() startTest: EventEmitter<any> = new EventEmitter<any>();

  fullName: string = '';
  rules: string[] = [
    'No use of additional applications or internet',
    'No dual screens/monitors',
    'No one else can be in the room with you',
    'Your desk/table must be clear or any materials except your test-taking device',
    'No other tab or appliaction should be opend',
  ];

  examPattern: string[] = [
    'Total test duration is 20 minute',
    'There are total questions',
    'Each question has four options and you must choose right option',
    'There is no Negative Marking System',
    'After 20 minutes test will be auto submitted',
    'Must enter your full name in order to start the test',
  ];
  startTheTest() {
    this.startTest.emit({ fullName: this.fullName });
  }
}
