import { Injectable } from '@angular/core';
import { genre } from '../Models/genre.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GenreDataService {
    constructor() {

  }

  private genreSource = new BehaviorSubject({ genre: null, key: 0 });
  genreAtual = this.genreSource.asObservable();

  getMovie(movie: genre, key: number) {
    this.genreSource.next({ genre: genre, key: key })
  }
}
