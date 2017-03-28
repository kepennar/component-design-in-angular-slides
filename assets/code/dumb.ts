@Component({
  selector: 'app-comment',
  template: `
    <div>
      <span>{{comment.user}}</span>
      <button *ngIf="deletable" (onClick)="onDelete()">x</button>
      <div>
        {{comment.text}}
      </div>
    </div>
  `
})
class CommentComponent {
  @Input() comment: Comment;
  @Input() deletable: boolean;
  @Output() onDelete = new EventEmitter();
}