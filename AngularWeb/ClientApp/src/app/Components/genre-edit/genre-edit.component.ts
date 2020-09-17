import { Component } from '@angular/core';
import { genre } from '../../Models/genre.model';
import { GenreService } from '../../Services/genre.service';
import { GenreDataService } from '../../Services/genre-data.service';

@Component({
    selector: 'app-genre-edit',
    templateUrl: './genre-edit.component.html',
    styleUrls: ['./genre-edit.component.css']
})
/** genreEdit component*/
export class GenreEditComponent {
    /** genreEdit ctor */

  genre: genre;
  key: string = '';

  constructor(private _genreService: GenreService,
    private _genreDataService: GenreDataService) {

  }
  ngOnInit() {
    this.genre = new genre();
    this._genreDataService.genreAtual.subscribe(data => {
      if (data.genre && data.key) {
        this.genre = new genre();
        this.genre.Description = data.genre.Description;
        this.genre.Active = data.genre.Active;
        this.genre.Id = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this._genreService.update(this.genre, this.genre.Id)
    }
    else {
      this._genreService.insert(this.genre);
    }
    this.genre = new genre();
    this.key = null;
  }
}
