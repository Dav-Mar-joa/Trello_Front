import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projets.model';
import { Liste } from '../Models/Listes.model';
import { Carte } from '../Models/Cartes.model';
import { Commentaire } from '../Models/Commentaires.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  projetsPopulated : Projet[] = [];

  currentProject : Projet =
  {
      id: 1,
      nom: "Projet 1",
      description: "Description du projet 1",
      dateCreation: null,
      listes: []
    }


  private baseUrl = 'http://localhost:5241';  // Assurez-vous de remplacer cela par la base URL correcte
  //private baseUrl = 'https://trelloback.azurewebsites.net';

  refresh()
  {
    this.getAll().subscribe((projects)=>{
      this.projetsPopulated = projects
      console.log(projects)
      let project = this.projetsPopulated.find((project)=>project.id == this.currentProject.id)
      if (project)
      {
        this.currentProject = project
      }
    });


  }

  constructor(private http : HttpClient) { }

  // Fonctions

  getAll() : Observable<Projet[]>
  {
    return this.http.get<Projet[]>(this.baseUrl+"/projets");
  }


  getListbyProject(project : Projet) 
  {
    return this.http.get<Liste[]>(this.baseUrl+"/listes/" + project.id);
  }
  
  postProjet(projet : Projet)
  {
    return this.http.post(this.baseUrl+"/projets/", projet).subscribe((reponse)=>{
      console.log(reponse)
      this.refresh()
    })
  }

  deleteProjet(projet : Projet)
  {
    return this.http.delete(this.baseUrl+"/projets/"+projet.id);
  }

  getCardbyList(list:Liste)
  {
    return this.http.get<Carte[]>(this.baseUrl+"/cartes/" + list.id);

  }

  getCommentairebyCart(cart : Carte)
  {
    return this.http.get<Commentaire[]>(this.baseUrl+ cart.id);
  }

  updateCarte(carte : Carte)
  {
    console.log("yolo")
    return this.http.put(this.baseUrl+"/cartes/" + carte.id, carte).subscribe((reponse)=>{
      console.log(reponse)
      this.refresh()
    })  }

  postCard(carte : Carte)
  {
    return this.http.post(this.baseUrl+"/cartes/", carte).subscribe((reponse)=>{
      console.log(reponse)
      this.refresh()
    })
  }

  deleteCard(cart : Carte)
  {
    return this.http.delete(this.baseUrl+"/cartes/"+cart.id);
  }

  deleteComment(Comment : Commentaire)
  {
    return this.http.delete(this.baseUrl+"/cartes/"+Comment.id);
  }
}
