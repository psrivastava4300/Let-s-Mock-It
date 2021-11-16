import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TestPageComponent } from './student/test-page/test-page.component';
import { ResultComponent } from './student/result/result.component';
import { ManageStudentsComponent } from './teacher/manage-students/manage-students.component';
import { ManageQuestionsComponent } from './teacher/manage-questions/manage-questions.component';
import { AddChaptersComponent } from './teacher/add-chapters/add-chapters.component';
import { AddStudentsComponent } from './teacher/add-students/add-students.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionsComponent } from './teacher/add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CountDownComponent,
    TestPageComponent,
    ResultComponent,
    ManageStudentsComponent,
    ManageQuestionsComponent,
    AddChaptersComponent,
    AddStudentsComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
