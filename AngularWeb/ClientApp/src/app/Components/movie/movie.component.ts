import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { movie } from '../../Models/movie.model';
import { MovieDataService } from '../../Services/movie-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
/** Movie component*/
export class MovieComponent implements OnInit {

  movies: Observable<any>;

  constructor(private _movieService: MovieService,
              private _movieDataService: MovieDataService,
              private _router: Router) {

  }
  ngOnInit() {
    this.movies = this._movieService.listMovies();
  }
  delete(key: number) {
    this._movieService.delete(key);
  }
  edit(movie: movie, key: number) {
    this._movieDataService.getMovie(movie, key);
  }
  view(movie: movie) {
    this._router.navigate(['/movie-edit', movie.Id]);
    //this._movieService.getMovieById(key);
  }
}
