import { Component, Input } from '@angular/core';
import { Liste } from '../../Models/Listes.model';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Services/fetcher.service';
import { Carte } from '../../Models/Cartes.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private fetcher : FetcherService){}
  modificationState: boolean = false

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

   deleteList(list:Liste)
{
  console.log("delete list : "+list)
  this.fetcher.deleteList(list).subscribe(
    (info)=>{
      console.log(info)
      this.fetcher.refresh();
    });
    //this.card;
  }

  modifie() {
    if (this.modificationState)
    {
      this.fetcher.updateList(this.liste)
      this.modificationState = false;
    }
    else
    {
      this.modificationState = true;
    }
  }

   
}
