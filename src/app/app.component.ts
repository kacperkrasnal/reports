import { Component } from '@angular/core';
import { ReportRepository } from "./report.repository";
import { Report, SCHEDULES, FORMATS } from "./report.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'export-report';
  /*
  There is no validation for the form. In real app validation have to exist.
  */
  newReport: Report = new Report();
  constructor(private repository: ReportRepository) {}

  addReport(report: Report) {
    this.repository.addReport(report).subscribe(report => this.reports.push(report))
  }

  get reports(): Report[] {
    return this.repository.getReports()
  }

  changeReportTime(): void {
    this.newReport.exportTime = '';
  }

  addReportTime(value: string): void {
    this.newReport.exportTime = value;
  }

  get schedules(): string[] {
    return SCHEDULES
  }
  get formats(): string[] {
    return FORMATS
  }
}
