import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  subjectNotifier: Subject<null> = new Subject<null>();

  constructor(private http: HttpClient, public router: Router) {}

  delete(postId: string) {
    return this.http
      .delete<any>(`${environment.backendUrl}/posts/${postId}`)
      .pipe(
        map((addedComment: any) => {
          this.subjectNotifier.next();
        })
      );
  }
}
