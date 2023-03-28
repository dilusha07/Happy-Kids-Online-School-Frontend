import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { YouTubePlayerModule } from '@angular/youtube-player/youtube-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    RegistrationsuccessComponent,
    WelcomepageComponent,
    FooterComponent,
    AdmindashboardComponent,
    AddprofessorComponent,
    AddchapterComponent,
    AddcourseComponent,
    ApprovalstatusComponent,
    CourselistComponent,
    MywishlistComponent,
    ProfessorlistComponent,
    UserlistComponent,
    UserprofileComponent,
    ProfessorprofileComponent,
    UserdashboardComponent,
    ProfessordashboardComponent,
    MycoursesComponent,
    FullcourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    //YouTubePlayerModule,
    //CarouselModule,
   MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
