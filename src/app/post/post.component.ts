import { Component, Input, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  post!: Post;
  postImage!: string;

  constructor() {}

  ngOnInit(): void {
    this.postImage = environment.backendUrl + '/' + this.post.image;
  }
}
