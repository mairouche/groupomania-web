import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  signinNextRoute: string = 'home';
  siginErrorMessage: string = '';
  userCreatedValidationMessage: String = '';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.loggedOut) this.siginErrorMessage = 'Veuillez vous connecter';
      if (params.userCreated)
        this.userCreatedValidationMessage =
          'Utilisateur créé. Veuillez vous connecter';
    });
  }

  signin() {
    this.submitted = true;
    if (this.signinForm.valid) {
      this.authenticationService
        .signIn(this.signinForm.value, this.signinNextRoute)
        .subscribe((res) => {
          if (!res) this.siginErrorMessage = 'Email ou mot de passe erroné';
        });
    }
  }
}
