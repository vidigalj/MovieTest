import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { MovieDataService } from '../../Services/movie-data.service';
import { movie } from '../../Models/movie.model';


@Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.css']
})
/** movieEdit component*/
export class MovieEditComponent implements OnInit{
  movie: movie;
  key: string = '';

  constructor(private _movieService: MovieService,
              private _movieDataService: MovieDataService) {

  }
  ngOnInit() {
    this.movie = new movie();
    this._movieDataService.movieAtual.subscribe(data => {
      if (data.movie && data.key) {
        this.movie = new movie();
        this.movie.Director = data.movie.Director;
        this.movie.GenreId = data.movie.GenreId;
        this.movie.Synopsis = data.movie.Synopsis;
        this.movie.Title = data.movie.Title;
        this.movie.Year = data.movie.Year;
        this.movie.Id = data.movie.Id;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this._movieService.update(this.movie, this.movie.Id)
    }
    else {
      this._movieService.insert(this.movie);
    }
    this.movie = new movie();
    this.key = null;
  }
}
