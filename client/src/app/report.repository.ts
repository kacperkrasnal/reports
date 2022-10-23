import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {catchError, Observable, throwError } from "rxjs";
import { Report } from "./report.model";


@Injectable()
export class ReportRepository {
  apiUrl: string = 'http://localhost:8000/api'
  private reports: Report[] = [];

  constructor(private http: HttpClient) {
    this.loadReports().subscribe(data => {
      data.forEach((report: Report) => this.reports.push(report))
    })
  }

  loadReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/reports/`)
  }

  addReport(report: Report): Observable<any> {
    let body = JSON.stringify(report)
    return this.http.post(`${this.apiUrl}/reports/`, report).pipe(
      // @ts-ignore
      catchError(this.handleError('addReport', report))
    )
  }

  getReports(): Report[] {
    return this.reports
  }

  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('An error occurred:', error.error);
  } else if (error.status != undefined) {
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
