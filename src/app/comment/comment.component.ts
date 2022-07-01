import { Component, Input, OnInit } from '@angular/core';
import { Comment } from './model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input()
  comment!: Comment;

  constructor() {}

  ngOnInit(): void {}

  isCommentToday() {
    if (new Date(this.comment.creationDate) < new Date()) return false;
    else return true;
  }
}
