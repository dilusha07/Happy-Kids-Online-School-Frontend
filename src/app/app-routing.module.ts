import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';

const routes: Routes = [
  {path: '', component:WelcomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'registrationsuccess', component:RegistrationsuccessComponent},
  {path: 'admindashboard', component:AdmindashboardComponent},
  {path:'addProfessor',component:AddprofessorComponent},
  {path:'addCourse',component:AddcourseComponent},
  {path:'addchapter',component:AddchapterComponent},
  {path:'approveprofessor',component:ApprovalstatusComponent},
  {path:'courselist',component:CourselistComponent},
  {path:'mywishlist',component:MywishlistComponent},
  {path:'professorlist',component:ProfessorlistComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'edituserprofile',component:UserprofileComponent},
  {path:'editprofessorprofile',component:ProfessorprofileComponent},
  {path:'userdashboard', component:UserdashboardComponent},
  {path:'professordashboard',component:ProfessordashboardComponent},
  {path:'mycourses',component:MycoursesComponent},
  {path:'fullcourse/:coursename',component:FullcourseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
