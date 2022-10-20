import { Component } from '@angular/core';
import { Report, SCHEDULES, FORMATS } from "./report.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'export-report';

  newReport: Report = new Report();

  changeReportTime(): void {
    this.newReport.scheduleType.exportTime = '';
  }

  addReportTime(value: string): void {
    this.newReport.scheduleType.exportTime = value;
  }

  get jsonReport() {
    return JSON.stringify(this.newReport)
  }

  addReport(r: Report) {
    console.log(this.jsonReport)
  }

  get schedules(): string[] {
    return SCHEDULES
  }
  get formats(): string[] {
    return FORMATS
  }
}
