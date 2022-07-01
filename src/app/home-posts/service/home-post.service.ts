import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/post/model/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomePostService {
  constructor(private http: HttpClient, public router: Router) {}

  list(): Observable<any> {
    return this.http.get<Post>(`${environment.backendUrl}/posts/`);
  }
}
