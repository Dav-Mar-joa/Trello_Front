import { Component, Input } from '@angular/core';
import { Carte } from '../../Models/Cartes.model';
import { FetcherService } from '../../Services/fetcher.service';
import { CommentComponent } from '../comment/comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  card! : Carte;

  constructor(private fetcher : FetcherService){}

  deleteCard(carte:Carte)
  {
   console.log("delete card : "+carte)
    this.fetcher.deleteCard(carte).subscribe((info)=>console.log(info));
  }
}
