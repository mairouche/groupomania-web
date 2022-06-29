import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, public router: Router) {}

  signIn(credential: Credential, nextRoute: String): Observable<Boolean> {
    return this.http
      .post<User>(`${environment.backendUrl}/auth/login`, credential)
      .pipe(
        map((signedUser: User) => {
          if (signedUser != null) {
            localStorage.setItem('currentUser', JSON.stringify(signedUser));
            this.router.navigate([nextRoute]);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  getToken() {
    let currentUser: any = localStorage.getItem('currentUser');
    return JSON.parse(currentUser)?.token;
  }

  get isLoggedIn(): boolean {
    let currentUser: any = localStorage.getItem('currentUser');
    return currentUser !== null && currentUser !== undefined ? true : false;
  }
}
