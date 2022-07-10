import {ProyectoArticles} from '../entities/proyectoArticles';

export interface IProyecto {
  status: string;
  totalResults: number;
  articles: ProyectoArticles[];
}



export interface IProyectoResponse {
  status: string;
  article: ProyectoArticles;
}
