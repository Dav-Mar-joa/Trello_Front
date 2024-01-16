import { Component, Input } from '@angular/core';
import { Liste } from '../../Models/Listes.model';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Services/fetcher.service';
import { Carte } from '../../Models/Cartes.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private fetcher : FetcherService){}


  @Input()
   liste! : Liste;


   ajoutCard()
   {
      let carte : Carte = {
        id : 0,
        titre : "Default",
        description : "Default",
        dateCreation : null,
        idListe : this.liste.id,
        commentaires: [],
        idListeNavigation : null,
    };

      this.fetcher.postCard(carte)
   }

}
