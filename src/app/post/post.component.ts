import { Component, Input, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { environment } from 'src/environments/environment';
import { DateHelper } from '../shared/helper/date.helper';
import { CurrentUser } from '../signin/models/current-user.model';
import { AuthenticationService } from '../signin/services/authentication.service';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  post!: Post;
  postImage!: string;
  currentUser: CurrentUser;
  environment;

  constructor(
    private authenticationService: AuthenticationService,
    private postService: PostService
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
    this.environment = environment;
  }

  ngOnInit(): void {
    this.postImage = environment.backendUrl + '/' + this.post.image;
  }

  isPostToday() {
    return DateHelper.isToday(this.post.creationDate);
  }

  isPostLikedByCurrentUser() {
    const liked = this.post.likers.find((obj) => {
      return obj._id === this.currentUser._id;
    });
    return liked ? true : false;
  }

  onDelete() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce post ?'))
      this.postService.delete(this.post._id).subscribe((success) => success);
  }
}
