import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { movie } from '../Models/movie.model';

@Injectable(
  {providedIn: 'root'}
)
export class MovieDataService {
    constructor() {

  }

  private movieSource = new BehaviorSubject({ movie: null, key: 0 });
  movieAtual = this.movieSource.asObservable();

  getMovie(movie: movie, key: number) {
    this.movieSource.next({movie: movie, key: key})
  }
}
