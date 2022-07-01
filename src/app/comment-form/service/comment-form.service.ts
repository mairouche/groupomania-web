import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentForm } from '../model/comment-form.model';

@Injectable({
  providedIn: 'root',
})
export class CommentFormService {
  subjectNotifier: Subject<null> = new Subject<null>();

  constructor(private http: HttpClient, public router: Router) {}

  addComment(idPost: string, comment: CommentForm): Observable<Boolean> {
    return this.http
      .post<any>(`${environment.backendUrl}/posts/${idPost}/comments`, comment)
      .pipe(
        map((addedComment: any) => {
          if (addedComment != null) {
            this.subjectNotifier.next();
            return true;
          } else {
            return false;
          }
        })
      );
  }
}
