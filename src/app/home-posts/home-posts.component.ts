import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../post/model/post.model';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css'],
})
export class HomePostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
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
