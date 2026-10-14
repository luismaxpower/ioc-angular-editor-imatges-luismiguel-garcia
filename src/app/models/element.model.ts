export type GenereJoc = 'RPG'|  'Acció' | 'Aventura' | 'Estrategia' | 'Openworld' | 'Sandbox' | 'Simulació' | 'Shooter';

export interface Element {
    id: number;
    titol: string;
    categoria: GenereJoc;
    plataforma: string;
    dataLlançament: string;
    disponible: boolean;
    valoraciometacritic: number;
}









