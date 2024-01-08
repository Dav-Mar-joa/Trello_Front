import { Component, Input } from '@angular/core';
import { Projet } from '../../Models/Projets.model';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input()
  currentProject! : Projet;

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
