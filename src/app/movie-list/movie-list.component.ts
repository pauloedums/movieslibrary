import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  @Input() search: string;

  movies: string;

  constructor() {
    this.movies = this.search;
  }

}
