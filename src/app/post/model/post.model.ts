export class Post {
  _id!: string;
  content!: string;
  authorName!: string;
  image!: string;
  comments!: Array<any>;
  likers!: Array<any>;
  creationDate!: Date;
}
