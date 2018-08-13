import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultiuseService } from '../multiuse.service';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {

  eventName: any;
  studentNumber: any;
  teacherNumber: any;

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  constructor(private formBuilder: FormBuilder, private multi: MultiuseService, private router: Router) { }

  ngOnInit() {

    this.form1 = this.formBuilder.group({
      eventName: [null, Validators.required],
      eventNumber: [null, Validators.required],
      numberOfStudents: [null, Validators.required],
      inOut: [null, Validators.required]
    });

    this.form2 = this.formBuilder.group({
      studentName: [null, Validators.required],
      studentNumber: [null, Validators.required],
      studentClass: [null, Validators.required],
      studentDiv: [null, Validators.required]
    });

    this.form3 = this.formBuilder.group({
      teacherName: [null, Validators.required],
      teacherNumber: [null, Validators.required],
      teacherUsername: [null, Validators.required],
      teacherPassword: [null, Validators.required]
    });

    var element = <HTMLInputElement>document.getElementById("data");
    element.hidden = true;

    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event) {
      history.pushState(null, document.title, location.href);
    });
  }

  logOut() {
    window.location.href = '/';
  }

  addEvent(eventName, eventNumber, numberOfStudents, inOut) {
    this.multi.getDataEvents(eventName).subscribe(res => {
      this.eventName = res
      // console.log(JSON.stringify(this.itemname.mes))
      if (this.eventName.mes == "Event exists") {
        // console.log(this.itemname.mes)
        alert("Event already exists!");
        this.router.navigate(["adminOps"]);
        this.form1.reset();
      }
      else {
        this.multi.addEvent(eventName, eventNumber, numberOfStudents, inOut);
        alert("Event added successfully!");
        this.router.navigate(["adminOps"]);
        this.form1.reset();
      }
    });
  }

  addStudent(studentName, studentNumber, studentClass, studentDiv) {
    this.multi.getDataStudents(studentNumber).subscribe(res => {
      this.studentNumber = res
      // console.log(JSON.stringify(this.itemname.mes))
      if (this.studentNumber.mes == "Student exists") {
        // console.log(this.itemname.mes)
        alert("Student already exists!");
        this.router.navigate(["adminOps"]);
        this.form2.reset();
      }
      else {
        this.multi.addStudent(studentName, studentNumber, studentClass, studentDiv);
        alert("Student added successfully!");
        this.router.navigate(["adminOps"]);
        this.form2.reset();
      }
    });
  }

  addTeacher(teacherName, teacherNumber, teacherUsername, teacherPassword) {
    this.multi.getDataTeachers(teacherNumber).subscribe(res => {
      this.teacherNumber = res
      // console.log(JSON.stringify(this.itemname.mes))
      if (this.teacherNumber.mes == "Teacher exists") {
        // console.log(this.itemname.mes)
        alert("Teacher already exists!");
        this.router.navigate(["adminOps"]);
        this.form3.reset();
      }
      else {
        this.multi.addTeacher(teacherName, teacherNumber, teacherUsername, teacherPassword);
        alert("Teacher added successfully!");
        this.router.navigate(["adminOps"]);
        this.form3.reset();
      }
    });
  }

}
