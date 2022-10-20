import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Report } from "./report.model";

@Injectable()
export class ReportRepository {
  private reports: Report[] = [];
  constructor(private http: HttpClient) {}

  loadReports() {
    console.log('load')
  }
  sendReport() {
    console.log('send')
  }
}
