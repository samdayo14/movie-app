import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MoviesService } from '../../services/movies.service';

import { MovieDto } from 'src/app/Models/movie';
import { Tv } from 'src/app/Models/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topTv: Tv[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesService.getTv$('top_rated').subscribe((tv) => {
      this.topTv = tv;
    });
  }
}
