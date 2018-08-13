import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiuseService } from '../multiuse.service';

@Component({
  selector: 'app-teacher-operations',
  templateUrl: './teacher-operations.component.html',
  styleUrls: ['./teacher-operations.component.css']
})
export class TeacherOperationsComponent implements OnInit {
  studentData;

  constructor(private router: Router, private multi: MultiuseService) { }

  ngOnInit() {
    var element = <HTMLInputElement>document.getElementById("data");
    element.hidden = true;

    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event) {
      history.pushState(null, document.title, location.href);
    });

    this.multi.viewStudents().subscribe(res => this.studentData = res);
  }

  logOut() {
    window.location.href = '/';
  }
}
