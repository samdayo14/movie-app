import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Tv } from 'src/app/Models/tvshow';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() itemsI: Tv[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
function s(
  arg0: number,
  s: any
): import('@angular/animations').AnimationMetadata {
  throw new Error('Function not implemented.');
}
