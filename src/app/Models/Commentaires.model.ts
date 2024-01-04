import { Carte } from "./Cartes.model";

export interface Commentaire {
    id: number;
    contenu?: string | null;
    dateCreation?: string | null; // Remarque : DateOnly n'est pas directement pris en charge en TypeScript, vous pouvez utiliser une chaîne ou définir votre propre type DateOnly.
    idCarte?: number | null;
    idCarteNavigation?: Carte | null;
}