import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { NgTemplateOutlet } from '@angular/common';
import { Tv } from 'src/app/Models/tvshow';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData?: Movie;
  @Input() itemInfo?: Tv;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
