import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-picker',
  templateUrl: './duration-picker.component.html',
  styleUrls: ['./duration-picker.component.css']
})
export class DurationPickerComponent implements OnInit {

  @Input() durationValue: number;
  @Output() duration: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDurationChange(e): void {
    let value = e.target.valueAsNumber;
    if (value === NaN) { value = 0; }
    this.duration.emit(value);
  }

}
