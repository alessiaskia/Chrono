export interface GenderResult {
    name: string;
    count: number;
    probability: number;
    gender: string;
    country_id?: string; //vu qu'on ne le récupère pas forcément, on le rend nullable
}