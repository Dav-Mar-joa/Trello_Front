import { Commentaire } from "./Commentaires.model";
import { Liste } from "./Listes.model";

export interface Carte {
    id: number;
    titre: string;
    description?: string | null;
    dateCreation?: Date | null;
    idListe?: number | null;
    commentaires: Commentaire[];
    idListeNavigation?: Liste | null;
}
