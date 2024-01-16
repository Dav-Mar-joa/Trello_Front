import { Component, Input } from '@angular/core';
import { Carte } from '../../Models/Cartes.model';
import { FetcherService } from '../../Services/fetcher.service';
import { CommentComponent } from '../comment/comment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommentComponent, CommonModule,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  card! : Carte;

  modificationState: boolean = false
  
  constructor(private fetcher : FetcherService){}
  
  deleteCard(carte:Carte)
  {
    console.log("delete card : "+carte)
    this.fetcher.deleteCard(carte).subscribe(
      (info)=>{
        console.log(info)
        this.fetcher.refresh();
      });
      //this.card;
    }

    modifie() {
      if (this.modificationState)
      {
        this.fetcher.updateCarte(this.card)
        this.modificationState = false;
      }
      else
      {
        this.modificationState = true;
      }
    }
}
