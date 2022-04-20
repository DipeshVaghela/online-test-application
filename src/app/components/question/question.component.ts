import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, OnChanges {
  constructor(private testService: TestService) {}

  ngOnInit(): void {}

  @Input() question: any;
  @Input() i: number = 0;
  @Input() answered: boolean = false;
  @Output() isCorrect: EventEmitter<any> = new EventEmitter<any>();
  selectedOption: string = '';

  ngOnChanges() {
    if (!this.answered) {
      this.selectedOption = '';
    }
  }

  selectOption(opt: string) {
    this.selectedOption = opt;
    this.answered = true;

    if (this.selectedOption === this.question.answer) {
      this.isCorrect.emit({ questionNo: this.i, isCorrect: true });
    } else {
      this.isCorrect.emit({ questionNo: this.i, isCorrect: false });
    }
  }
}
