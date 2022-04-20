import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  readonly TIMER_SECOND = 60;
  readonly TIMER_MINUTE = 20;

  isTimerEnabled: boolean = false;

  timerSecond = 0;
  timerMinute = this.TIMER_MINUTE;
  totalTimeTaken: number = 0;
  interval: any;

  startTimer() {
    this.totalTimeTaken = 0;
    this.isTimerEnabled = true;
    this.interval = setInterval(() => {
      if (this.timerMinute >= 0) {
        if (this.timerSecond > 0) {
          this.timerSecond--;
          this.totalTimeTaken++;
        } else {
          this.timerMinute--;
          if (this.timerMinute >= 0) {
            this.timerSecond = this.TIMER_SECOND - 1;
            this.totalTimeTaken++;
          } else {
            this.stopTimer();
          }
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.isTimerEnabled = false;
    this.timerSecond = 0;
    this.timerMinute = this.TIMER_MINUTE;
  }
}
