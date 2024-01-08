import { Component, Input } from '@angular/core';
import { Commentaire } from '../../Models/Commentaires.model';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
@Input()
comment!: Commentaire;
}
