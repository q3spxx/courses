import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() dateValue: string;
  @Output() date: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  onDateChange(e): void {
    this.date.emit(e.target.value);
  }

}
