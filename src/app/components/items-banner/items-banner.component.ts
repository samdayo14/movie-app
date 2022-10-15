import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { Tv } from 'src/app/Models/tvshow';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() items: Movie[] = [];
  @Input() items_: Tv[] = [];
  @Input() title: string = '';
}
