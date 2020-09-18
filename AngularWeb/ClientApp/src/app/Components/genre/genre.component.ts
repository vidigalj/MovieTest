import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../Services/genre.service';
import { Observable } from 'rxjs';
import { GenreDataService } from '../../Services/genre-data.service';
import { genre } from '../../Models/genre.model';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css']
})
/** Genre component*/
export class GenreComponent implements OnInit {
    /** Genre ctor */
  genres: Observable<any>;

  constructor(private _genreService: GenreService,
              private _genreDataService: GenreDataService) {

  }
  ngOnInit() {
    this.genres = this._genreService.listGenres();
  }
  delete(key: number) {
    this._genreService.delete(key);
  }
  edit(movie: genre, key: number) {
    this._genreDataService.getMovie(movie, key);
  }
  view(key: number) {
    this._genreService.getGenreById(key);

  }
}
