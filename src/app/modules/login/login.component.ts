import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './services/login.service';
import {Login} from '../../data/structure/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: RegisterForm;
  submitted = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.registerForm = new RegisterForm(new Login());
  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    await this.loginService.onVerificarLogin(this.registerForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class RegisterForm extends FormGroup {
  constructor(login: Login) {
    super({
      userName: new FormControl(login.userName, [Validators.required]),
      password: new FormControl(login.password, [Validators.required]),
    });
  }
}
