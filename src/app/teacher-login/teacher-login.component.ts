import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultiuseService } from '../multiuse.service';


@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css'],
  providers: [MultiuseService]
})
export class TeacherLoginComponent implements OnInit {
  teacherUsername: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private multi: MultiuseService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      teacherUsername: [null, Validators.required],
      password: [null, Validators.required]
    });

    var element = <HTMLInputElement>document.getElementById("data");
    element.hidden = true;
  }

  login2(teacherUsername, password) {
    this.multi.getDataTeacherLogin(teacherUsername).subscribe(res => {
      this.teacherUsername = res
      // console.log(JSON.stringify(this.itemname.mes))
      if (this.teacherUsername.mes == "Teacher doesn't exist") {
        // console.log(this.itemname.mes)
        alert("Teacher doesn't exist!");
        this.router.navigate(["teacherlogin"]);
        this.form.reset();
      }
      else {
        alert("Teacher logged in successfully!");
        this.router.navigate(["teacherOps"]);
      }
    });
  }

}
