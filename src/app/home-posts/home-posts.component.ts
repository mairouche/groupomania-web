import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentFormService } from '../comment-form/service/comment-form.service';
import { PostFormService } from '../post-form/service/post-form.service';
import { Post } from '../post/model/post.model';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css'],
})
export class HomePostsComponent implements OnInit {
  posts!: Post[];
  postSubscription: Subscription =
    this.postFormService.subjectNotifier.subscribe((notified) => {
      this.refreshPosts();
    });

  commentSubscription: Subscription =
    this.commentFormService.subjectNotifier.subscribe((notified) => {
      this.refreshPosts();
    });

  constructor(
    private postService: PostService,
    private postFormService: PostFormService,
    private commentFormService: CommentFormService
  ) {}

  ngOnInit(): void {
    this.refreshPosts();
  }

  refreshPosts() {
    this.postService
      .list()
      .pipe(
        map((data) => {
          this.posts = data;
        })
      )
      .subscribe();
  }
}
