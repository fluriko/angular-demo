import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {UserSignup} from '../_model/user-signup-model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../_util/must-match.validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: UserSignup = new UserSignup();

  form: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  invalidEmailMsg: string;
  validEmailMsg: string;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  validateEmail() {
    this.userService.findByEmail(this.user.email).subscribe(
      res => {
        this.invalidEmailMsg = 'email already exist';
        this.validEmailMsg = undefined;
      },
      error => {
        this.validEmailMsg = 'OK';
        this.invalidEmailMsg = undefined;
      }
    );
  }

  onSubmit() {
    this.user.firstName = this.form.getRawValue().firstName;
    this.user.lastName = this.form.getRawValue().lastName;
    this.user.email = this.form.getRawValue().email;
    this.user.password = this.form.getRawValue().password;
    this.user.confirmPassword = this.form.getRawValue().confirmPassword;

    this.userService.addUser(this.user).subscribe(
      res => console.log('success')
    );
  }


}
