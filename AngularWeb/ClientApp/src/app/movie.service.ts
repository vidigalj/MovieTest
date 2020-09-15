import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }
  listMovies(): Observable<any> {
    var result = this.http.get("http://localhost:57414/api/ApiMovie/", { headers: { append: "Access-Control-Allow-Origin, http://localhost:57414" } });

    return result
  }
}
