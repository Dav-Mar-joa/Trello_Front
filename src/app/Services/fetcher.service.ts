import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projects.model';
import { Liste } from '../Models/Listes.model';
import { Carte } from '../Models/Cartes.model';
import { Commentaire } from '../Models/Commentaires.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private http : HttpClient) { }

  // Fonctions

  getAll() : Observable<Projet[]>
  {
    return this.http.get<Projet[]>("http://localhost:5241/projets");
  }


  getListbyProject(project : Projet) 
  {
    return this.http.get<Liste[]>("http://localhost:5241/listes/" + project.id);
  }

  getCardbyList(list:Liste)
  {
    return this.http.get<Carte[]>("http://localhost:5241/cartes/" + list.id);

  }

  getCommentairebyCart(cart : Carte)
  {
    return this.http.get<Commentaire[]>("http://localhost:5241/Commentaires/" + cart.id);
  }

}
