import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Movie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  defaultSearchURL = environment.defaultSearch;
  titleSearch = environment.idSearch;

  getMovieList(val: string) {
    return this.http.get<Movie>(`${this.defaultSearchURL}${val}`);
  }
  getMovie(id: string) {
    return this.http.get<Movie>(`${this.titleSearch}${id}`);
  }
}
