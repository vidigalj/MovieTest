import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../Models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) {

  }
  listMovies(): Observable<any> {
    return this._http.get("http://localhost:57414/api/ApiMovie/");
  }
  insert(movie: movie) {
    this._http.post("http://localhost:57414/api/ApiMovie/", movie);
  }
  update(movie: movie, key: number) {
    this._http.put("http://localhost:57414/api/ApiMovie/", {key, movie});
  }
  delete(key: number) {
    this._http.delete(`http://localhost:57414/api/ApiMovie/${key}`);
  }
}
