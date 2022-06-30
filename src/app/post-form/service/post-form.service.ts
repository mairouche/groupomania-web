import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostFormService {
  constructor(private http: HttpClient, public router: Router) {}

  addPost(post: any): Observable<Boolean> {
    return this.http.post<any>(`${environment.backendUrl}/posts/`, post).pipe(
      map((addedPost: any) => {
        if (addedPost != null) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
