import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Movie } from 'src/app/Models/movie';
import { Tv } from 'src/app/Models/tvshow';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent implements OnInit {
  Tvs$?: Observable<Tv[]>;
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Tvs$ = this.moviesService.getTvs();

    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvs$ByGenre(genreId, 1);
      } else {
        this.getPagedTvs$(1);
      }
    });
  }

  getPagedTvs$(page: number, searchKeyWord?: string) {
    this.Tvs$ = this.moviesService.searchTvs(page, searchKeyWord);
  }

  getTvs$ByGenre(genreId: string, page: number) {
    this.Tvs$ = this.moviesService.getTvsByGenre(genreId, page);
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvs$ByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvs$(pageNumber, this.searchValue);
      } else {
        this.getPagedTvs$(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvs$(1, this.searchValue);
    }
  }
}
