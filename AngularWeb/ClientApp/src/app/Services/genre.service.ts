import { Injectable } from '@angular/core';
import { genre } from '../Models/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class GenreService {

  constructor(private _http: HttpClient) {

  }
  listGenres(): Observable<any> {
    return this._http.get("http://localhost:57414/api/ApiGenre/");
  }
  insert(genre: genre) {
    this._http.post("http://localhost:57414/api/ApiGenre/", genre);
  }
  update(genre: genre, key: number) {
    this._http.put("http://localhost:57414/api/ApiGenre/", { key, genre });
  }
  delete(key: number) {
    this._http.delete(`http://localhost:57414/api/ApiGenre/${key}`);
  }
}
