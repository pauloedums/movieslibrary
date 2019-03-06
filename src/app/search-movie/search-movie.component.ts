import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MoviesService } from '../movies.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent {
  moviesList;

  constructor(public movies: MoviesService) {}

  searchResult: string;
  searchFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  onKey(event: KeyboardEvent) { // with type info
    this.searchFormControl.valueChanges.forEach(
      (value: string) => this.searchResult = value
    );

    this.moviesList = this.movies.getConfig(this.searchResult);
  }
}
