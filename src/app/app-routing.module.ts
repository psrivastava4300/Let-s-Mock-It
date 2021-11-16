import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TestPageComponent } from './student/test-page/test-page.component';
import { ResultComponent } from './student/result/result.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teacher_profile', component: TeacherProfileComponent },
  { path: 'student_profile', component: StudentProfileComponent },
  { path: 'teacher_dashboard', component: TeacherDashboardComponent },
  { path: 'student_dashboard', component: StudentDashboardComponent },
  { path: 'test_page', component: TestPageComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, TeacherProfileComponent, StudentProfileComponent, StudentDashboardComponent, TeacherDashboardComponent]
