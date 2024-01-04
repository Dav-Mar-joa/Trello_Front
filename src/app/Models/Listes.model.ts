import { Carte } from "./Cartes.model";
import { Projet } from "./Projects.model";

export interface Liste {
    id: number;
    nom: string;
    idProjet?: number | null;
    cartes: Carte[];
    idProjetNavigation?: Projet | null;
}