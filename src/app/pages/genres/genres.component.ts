import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/movie';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  title: string = 'Movie genres';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
