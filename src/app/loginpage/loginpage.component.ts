import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  users: Users[] = [];
  errMsg:string="";
  form: FormGroup;
  routerLink: string[];
  constructor(private restService: RestService, private route: Router,public fb: FormBuilder) { 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, this.emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }
 emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}
public onSubmit(values: Object): void {
  if (this.form.valid) {
    this.proceedLoginPage();
  }
}
  proceedLoginPage() {
    if(!(this.form.value.email && this.form.value.password)){
      this.errMsg= "Please Fill the Fields";
    }
    this.restService.getUsers().subscribe(
      (repsonse) => {
        this.users = repsonse.users;
        if (this.users && this.users.length > 0) {
          this.users.forEach(user => {
            if (user.emailid.match(this.form.value.email) && user.password.match(this.form.value.password)) {
              this.routeToDashBoardPageOnly(user.name);
            } else{
              this.errMsg="Invalid login details.";
            }
          })
        }
      }
    ),
      (error) => {
        this.errMsg="Api not loaded";
        console.log("Error Occuered" + error);
      };
    
  }
  routeToDashBoardPageOnly(name: string) {
    this.routerLink = ['dashboard/' + name];
    this.route.navigate(this.routerLink);
  }
  ngOnInit(): void {
  }

}
