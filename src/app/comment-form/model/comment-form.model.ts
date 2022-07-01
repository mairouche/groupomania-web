export class CommentForm {
  content!: string;
  authorName!: string;

  constructor(content: string, authorName: string) {
    this.content = content;
    this.authorName = authorName;
  }
}
