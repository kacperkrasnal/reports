import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-picker',
  templateUrl: './schedule-picker.component.html',
})
export class SchedulePickerComponent {
  @Input('scheduleType') schedule = ''
  @Output() reportTimeEvent = new EventEmitter<string>();

  weekdays: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  reportTimeChanger(dateValue?: string, timeValue?: string, weekValue?: string) {
    switch (this.schedule) {
      case 'No repeat':
        this.reportTimeEvent.emit('')
        break;
      case 'Specific Date':
        if (!dateValue || !timeValue) {
          break;
        }
        this.reportTimeEvent.emit(`${dateValue} at ${timeValue}`)
        break;

      case 'Daily':
        this.reportTimeEvent.emit(timeValue)
        break;

      case 'Weekly':
        if (!weekValue || !timeValue) {
          break;
        }
        this.reportTimeEvent.emit(`${weekValue} at ${timeValue}`)
        break;
    }
  }
}
