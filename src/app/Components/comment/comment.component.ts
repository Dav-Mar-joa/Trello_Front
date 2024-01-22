import { Component, Input } from '@angular/core';
import { Commentaire } from '../../Models/Commentaires.model';
import { FetcherService } from '../../Services/fetcher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
@Input() comment!: Commentaire;
modificationState: boolean = false

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
  }

  modifie() {
    if (this.modificationState)
    {
      this.fetcher.updateComment(this.comment)
      this.modificationState = false;
    }
    else
    {
      this.modificationState = true;
    }
  }

}