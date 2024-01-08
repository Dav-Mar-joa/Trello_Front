import { Component } from '@angular/core';
import { Projet } from '../../Models/Projets.model';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { FetcherService } from '../../Services/fetcher.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

  constructor(private fetcher : FetcherService)
  {
    this.fetcher.getAll().subscribe((projects)=> this.projetsPopulated = projects);

  }

  projetsPopulated : Projet[] = [];

  currentProject : Projet =
  {
      id: 1,
      nom: "Projet 1",
      description: "Description du projet 1",
      dateCreation: null,
      listes: []
    }

  refresh()
  {
    this.fetcher.getAll().subscribe((projects)=>{
      console.log(projects);
      console.log(this.projetsPopulated);
      this.projetsPopulated = projects;
      console.log(projects);
      console.log(this.projetsPopulated);
    }); 
  }

  onClick( project : Projet)
  {
    this.currentProject = project;

    // recuperer les listes pour venir les ajouter dans le model

    // fetch 

    // this.fetcher.getListbyProject(project).subscribe((listes)=>this.currentProject.listes = listes);
    // this.currentProject.listes.forEach((liste)=>this.fetcher.getCardbyList(liste).subscribe(
    //   (cards)=>liste.cartes = cards
    // ))
  }
}

// {
//   Id: 1,
//   Nom: "Projet 1",
//   Description: "Description du projet 1",
//   DateCreation: null,
//   Listes: []
// },
// {
//   Id: 2,
//   Nom: "Projet 2",
//   Description: "Description du projet 2",
//   DateCreation: null,
//   Listes: []
// },
// {
// Id: 3,
// Nom: "Projet 3",
// Description: "Description du projet 3",
// DateCreation: null,
// Listes: []
// },
// {
// Id: 4,
// Nom: "Projet 4",
// Description: "Description du projet 4",
// DateCreation: null,
// Listes: []
// },
// {
// Id: 5,
// Nom: "Projet 5",
// Description: "Description du projet 5",
// DateCreation: null,
// Listes: []
// },
