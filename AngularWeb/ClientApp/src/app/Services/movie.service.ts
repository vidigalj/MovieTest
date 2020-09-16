import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movies } from '../Models/placeholder.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }
  listMovies(): Observable<any> {
    return this.http.get("http://localhost:57414/api/ApiMovie/");
  }
}
