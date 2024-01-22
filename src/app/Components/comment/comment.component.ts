import { Component, Input } from '@angular/core';
import { Commentaire } from '../../Models/Commentaires.model';
import { FetcherService } from '../../Services/fetcher.service';

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

constructor(private fetcher : FetcherService){}
deleteComment(comment:Commentaire)
{
  console.log("delete card : "+comment)
  this.fetcher.deleteComment(comment).subscribe(
    (info)=>{
      console.log(info)
      this.fetcher.refresh();
    });
    //this.card;
  }}
