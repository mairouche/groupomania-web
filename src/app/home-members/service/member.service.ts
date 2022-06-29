import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient, public router: Router) {}

  list(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/users/`);
  }
}
