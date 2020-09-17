import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { movie } from '../../Models/movie.model';
import { MovieDataService } from '../../Services/movie-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
/** Movie component*/
export class MovieComponent implements OnInit {

  movies: Observable<any>;

  constructor(private _movieService: MovieService,
              private _movieDataService: MovieDataService) {

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

}
