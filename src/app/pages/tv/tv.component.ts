import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Tv } from 'src/app/Models/tvshow';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  tv: Tv | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getTv(id);
    });
  }

  getTv(id: string) {
    this.moviesService.getTv(id).subscribe((tvData) => {
      this.tv = tvData;
      console.log(tvData);
    });
  }
  // getTv(id: string) {
  //   this.moviesService.getTv(id).subscribe({
  //     next: (tvData) => {
  //       console.log(tvData);
  //     },
  //     error: console.error,
  //   });
  // }
}
