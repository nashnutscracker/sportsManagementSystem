import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultiuseService } from '../multiuse.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [MultiuseService]
})
export class AdminLoginComponent implements OnInit {
  username: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private multi: MultiuseService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

    var element = <HTMLInputElement>document.getElementById("data");
    element.hidden = true;

  }

  login1(username, password) {
    this.multi.getData(username).subscribe(res => {
      this.username = res
      // console.log(JSON.stringify(this.itemname.mes))
      if (this.username.mes == "Admin doesn't exist") {
        // console.log(this.itemname.mes)
        alert("This Username Has No Admin Rights!");
        this.router.navigate(["adminlogin"]);
        this.form.reset();
      }
      else {
        alert("Admin logged in successfully!");
        this.router.navigate(["adminOps"]);
      }
    });
  }

}
