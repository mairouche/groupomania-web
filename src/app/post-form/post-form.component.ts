import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(public fb: FormBuilder) {
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
    formData.append('postContent', this.postForm.get('postContent')?.value);
    formData.append('file', this.postForm.get('fileSource')?.value);

    console.log(formData);
  }
}
