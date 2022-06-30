import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUser } from '../models/current-user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, public router: Router) {}

  signIn(credential: Credential, nextRoute: String): Observable<Boolean> {
    return this.http
      .post<CurrentUser>(`${environment.backendUrl}/auth/login`, credential)
      .pipe(
        map((signedUser: CurrentUser) => {
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

  getCurrentUser(): CurrentUser {
    let userInLocalStorage: any = localStorage.getItem('currentUser');
    return JSON.parse(userInLocalStorage);
  }

  get isLoggedIn(): boolean {
    let currentUser: any = localStorage.getItem('currentUser');
    return currentUser !== null &&
      currentUser !== undefined &&
      !this.jwtHelper.isTokenExpired(JSON.parse(currentUser).token)
      ? true
      : false;
  }
}
