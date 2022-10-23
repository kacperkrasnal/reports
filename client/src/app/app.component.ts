import { Component } from '@angular/core';
import { ReportRepository } from "./report.repository";
import { Report } from "./report.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  modalOpen: boolean = false;
  constructor(private repository: ReportRepository) {}

  get reports(): Report[] {
    return this.repository.getReports()
  }

  modalSwitcher(): void {
    this.modalOpen = !this.modalOpen
  }
}
