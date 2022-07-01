import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../signin/services/authentication.service';
import { CommentForm } from './model/comment-form.model';
import { CommentFormService } from './service/comment-form.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Input()
  postId!: string;
  commentForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    private commentFormService: CommentFormService,
    private authenticationService: AuthenticationService
  ) {
    this.commentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(idPost: string) {
    this.submitted = true;
    if (this.commentForm.valid) {
      let comment = new CommentForm(
        this.commentForm.value.content,
        this.authenticationService.getCurrentUser().name
      );
      this.commentFormService
        .addComment(idPost, comment)
        .subscribe((success) => {
          this.commentForm.reset();
        });
    }
  }
}
