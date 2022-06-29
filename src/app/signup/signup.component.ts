import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public signupService: SignupService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  registerUser() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.signupService.signUp(this.signupForm.value).subscribe((data) => {
        this.signupForm.reset();
        this.router.navigate(['signin'], {
          queryParams: { userCreated: true },
        });
      });
    }
  }
}
