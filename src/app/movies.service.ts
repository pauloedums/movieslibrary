import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  defaultSearchURL = environment.defaultSearch;

  getConfig(val: string) {
    if (val) {
      return this.http.get(`${this.defaultSearchURL}${val}`, {})
        .subscribe( // Log the result or error
          data =>  data,
          error => error
        );
      }
  }
}
