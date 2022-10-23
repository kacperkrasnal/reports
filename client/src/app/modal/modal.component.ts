import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ReportRepository } from "../report.repository";
import { Report, SCHEDULES, FORMATS } from "../report.model";

@Component({
  selector: 'create-report-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output("modalSwitcher") modalSwitcher: EventEmitter<any> = new EventEmitter();
  formSubmitted: boolean = false;
  newReport: Report = new Report();

  constructor(private repository: ReportRepository) {}

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addReport(this.newReport);
      this.newReport = new Report();
      form.reset()
      this.formSubmitted = false;
      this.modalSwitcher.emit()
    }
  }

  addReport(report: Report): void {
    this.repository.addReport(report).subscribe(report => this.reports.push(report))
  }

  get reports(): Object[] {
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

