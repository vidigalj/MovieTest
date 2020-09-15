import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
/** Movie component*/
export class MovieComponent implements OnInit {

  movies: Array<any> = new Array();

  constructor(private movieService: MovieService) {

  }
  ngOnInit() {
    this.listMovies();
  }

  listMovies() {

    this.movieService.listMovies().subscribe(movies => {
      this.movies = movies;
    }, err => {
      console.log('Erro!', err)
    })
  }
}
