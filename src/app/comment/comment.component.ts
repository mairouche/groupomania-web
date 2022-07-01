import { Component, Input, OnInit } from '@angular/core';
import { DateHelper } from '../shared/helper/date.helper';
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
    return DateHelper.isToday(this.comment.creationDate);
  }
}
