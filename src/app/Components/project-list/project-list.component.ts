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

  constructor(public fetcher : FetcherService)
  {
    this.fetcher.refresh()
  }


 

  // refresh()
  // {
  //   this.fetcher.getAll().subscribe((projects)=>{
  //     console.log(projects);
  //     console.log(this.fetcher.projetsPopulated);
  //     this.fetcher.projetsPopulated = projects;
  //     console.log(projects);
  //     console.log(this.fetcher.projetsPopulated);
  //   }); 
  // }

  onClick( project : Projet)
  {
    this.fetcher.currentProject = project;

    // recuperer les listes pour venir les ajouter dans le model

    // fetch 

    // this.fetcher.getListbyProject(project).subscribe((listes)=>this.currentProject.listes = listes);
    // this.currentProject.listes.forEach((liste)=>this.fetcher.getCardbyList(liste).subscribe(
    //   (cards)=>liste.cartes = cards
    // ))
  }
  ajoutProjet()
   {
      let projet : Projet = {
        id : 0,
        nom: "Default",
        description: "Default",
        dateCreation: null,
        listes: []
    };

      this.fetcher.postProjet(projet)
   }

   deleteProject(projet:Projet)
   {
     console.log("delete projet : "+projet)
     this.fetcher.deleteProjet(projet).subscribe(
       (info)=>{
         console.log(info)
         this.fetcher.refresh();
       });
       //this.card;
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
