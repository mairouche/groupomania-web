import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserForm } from '../model/user-form.model';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: UserForm): Observable<any> {
    return this.http
      .post(`${environment.backendUrl}/auth/signup`, user)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
