import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostFormService {
  subjectNotifier: Subject<null> = new Subject<null>();

  constructor(private http: HttpClient, public router: Router) {}

  addPost(post: any): Observable<Boolean> {
    return this.http.post<any>(`${environment.backendUrl}/posts/`, post).pipe(
      map((addedPost: any) => {
        if (addedPost != null) {
          this.subjectNotifier.next();
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
