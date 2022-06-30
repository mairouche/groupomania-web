import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../signin/services/authentication.service';
import { PostFormService } from './service/post-form.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private postFormService: PostFormService,
    private authenticationService: AuthenticationService
  ) {
    this.postForm = this.fb.group({
      postContent: ['', Validators.required],
      postImage: [''],
      fileSource: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.postForm.patchValue({
        fileSource: file,
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('content', this.postForm.get('postContent')?.value);
    formData.append(
      'authorName',
      this.authenticationService.getCurrentUser().name
    );
    formData.append('image', this.postForm.get('fileSource')?.value);

    this.postFormService.addPost(formData).subscribe();
  }
}
