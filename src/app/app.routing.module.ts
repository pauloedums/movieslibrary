import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: SearchMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
