@Component({
  selector: 'app-comments',
  template: `
    <app-comment
      *ngFor="let com of comments* | async">
      [comment]="com"
      [deletable]="isAdmin | async"
    </app-comment>
  `
})
class CommentsComponent implements OnInit {
  comments: Observable<Comment>;
  isAdmin: Observable<boolean>;

  constructor(
    private userService: UserService,
    private commentApi: Api.comment
  ) { }
  ngOnInit() { 
    this.comments =
      this.commentApi.getComments();
    this.isAdmin =
      this.commentApi.isAdmin();
  }
}
