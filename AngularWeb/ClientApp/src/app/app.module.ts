import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieService } from './Services/movie.service';
import { MovieComponent } from './Components/movie/movie.component';
import { GenreService } from './Services/genre.service';
import { GenreComponent } from './Components/genre/genre.component';
import { GenreEditComponent } from './Components/genre-edit/genre-edit.component';
import { MovieEditComponent } from './Components/movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', component: MovieComponent, pathMatch: 'full' },
  { path: 'movie', component: MovieComponent },
  { path: 'genre', component: GenreComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule, MovieService, GenreService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
