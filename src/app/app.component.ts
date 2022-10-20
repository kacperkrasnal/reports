import { Component } from '@angular/core';
import { Report, SCHEDULES, FORMATS } from "./report.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /*
  There is no validation for the form. In real app validation have to exist.
  */
  title = 'export-report';
  newReport: Report = new Report();

  changeReportTime(): void {
    this.newReport.exportTime = '';
  }

  addReportTime(value: string): void {
    this.newReport.exportTime = value;
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
