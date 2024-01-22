import { Liste } from "./Listes.model";

export interface Projet {
    id: number;
    nom: string;
    description?: string | null;
    dateCreation?: Date | null;
    listes: Liste[];
}



