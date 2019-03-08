import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movieID;
  public movie;

  constructor(private route: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.movieID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.movieService.getMovie(this.movieID).subscribe((data) => {
      console.log(data);
      this.movie = {...data};
    });
  }

}
