import { Component, Input } from '@angular/core';
import { Projet } from '../../Models/Projets.model';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { Liste } from '../../Models/Listes.model';
import { FetcherService } from '../../Services/fetcher.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(private fetcher : FetcherService){}
  @Input()
  currentProject! : Projet;

  ajoutList()
   {
      let liste : Liste = {
        id: 0,
        nom: "Default",
        idProjet: this.currentProject.id,
        idProjetNavigation: null,
        cartes: []
      }
    
    this.fetcher.postList(liste)
   }
  // listespopulated: Liste[] = [
  //   {
  //     id: 1,
  //     nom: 'Liste 1',
  //     idProjet: 1,
  //     cartes: [],
  //     idProjetNavigation: null,
  //   },
  //   {
  //     id: 2,
  //     nom: 'Liste 2',
  //     idProjet: 1,
  //     cartes: [],
  //     idProjetNavigation: null,
  //   },
  //   // Ajoutez d'autres listes au besoin
  // ];
  //liste :Liste = this.listespopulated[0];
}
