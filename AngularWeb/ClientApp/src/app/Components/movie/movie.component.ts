import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { movies } from '../../Models/placeholder.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
/** Movie component*/
export class MovieComponent implements OnInit {

  movies: movies[];

  constructor(private movieService: MovieService) {

  }
  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this.movieService.listMovies().subscribe((movies: movies[]) => {
      this.movies = movies;
    }, error => {
      console.log('Erro!', error)
    })
  }
}
