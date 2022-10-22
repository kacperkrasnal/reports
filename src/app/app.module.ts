import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReportRepository } from "./report.repository";
import { AppComponent } from './app.component';
import { SchedulePickerComponent } from './schedule-picker/schedule-picker.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulePickerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReportRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
