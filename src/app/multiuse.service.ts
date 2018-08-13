import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { URLSearchParams } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class MultiuseService {

  constructor(private http: Http) { }

  getData(username) {
    return this.http.get(`${'http://localhost:2000/getData'}/${username}`)
      .pipe(map((response) => response.json()));
  }

  getDataTeacherLogin(teacherUsername) {
    return this.http.get(`${'http://localhost:2000/getDataTeacherLogin'}/${teacherUsername}`)
      .pipe(map((response) => response.json()));
  }



  getDataEvents(eventName) {
    return this.http.get(`${'http://localhost:2000/getDataEvents'}/${eventName}`)
      .pipe(map((response) => response.json()));
  }

  addEvent(eventName, eventNumber, numberOfStudents, inOut) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = new URLSearchParams();
    body.append('eventName', eventName);
    body.append('eventNumber', eventNumber);
    body.append('numberOfStudents', numberOfStudents);
    body.append('inOut', inOut);
    // console.log(body);
    return this.http.post('http://localhost:2000/addEvent', body).subscribe(
      data => {
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }



  getDataStudents(studentNumber) {
    return this.http.get(`${'http://localhost:2000/getDataStudents'}/${studentNumber}`)
      .pipe(map((response) => response.json()));
  }

  addStudent(studentName, studentNumber, studentClass, studentDiv) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = new URLSearchParams();
    body.append('studentName', studentName);
    body.append('studentNumber', studentNumber);
    body.append('studentClass', studentClass);
    body.append('studentDiv', studentDiv);
    // console.log(body);
    return this.http.post('http://localhost:2000/addStudent', body).subscribe(
      data => {
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }


  getDataTeachers(teacherNumber) {
    return this.http.get(`${'http://localhost:2000/getDataTeachers'}/${teacherNumber}`)
      .pipe(map((response) => response.json()));
  }

  addTeacher(teacherName, teacherNumber, teacherUsername, teacherPassword) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = new URLSearchParams();
    body.append('teacherName', teacherName);
    body.append('teacherNumber', teacherNumber);
    body.append('teacherUsername', teacherUsername);
    body.append('teacherPassword', teacherPassword);
    // console.log(body);
    return this.http.post('http://localhost:2000/addTeacher', body).subscribe(
      data => {
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

  viewStudents() {
    return this.http
      .get('http://localhost:2000/viewStudents')
      .pipe(map((response: Response) => response.json()));
  }
}
