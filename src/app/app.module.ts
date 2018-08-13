import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { TeacherOperationsComponent } from './teacher-operations/teacher-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    TeacherLoginComponent,
    AdminOperationsComponent,
    TeacherOperationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'adminlogin', component: AdminLoginComponent
      },
      {
        path: 'teacherlogin', component: TeacherLoginComponent
      },
      {
        path: 'teacherOps', component: TeacherOperationsComponent
      },
      {
        path: 'adminOps', component: AdminOperationsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
