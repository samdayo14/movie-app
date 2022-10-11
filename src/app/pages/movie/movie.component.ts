import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ItemComponent } from 'src/app/components/item/item.component';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from 'src/app/Models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMoviesImages(id);
      this.getMovieCredits(id);
    });
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe({
      next: (movieData) => {
        this.movie = movieData;
      },
      error: console.error,
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe({
      next: (movieVideosData) => {
        this.movieVideos = movieVideosData;
      },
      error: console.error,
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe({
      next: (movieCreditsData) => {
        this.movieCredits = movieCreditsData;
        console.log(movieCreditsData);
      },
    });
  }

  getMoviesImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  identify(index: number, item: MovieVideo) {
    return item.key;
  }
}
