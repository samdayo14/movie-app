import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  videoUrl: SafeResourceUrl = '';
  @Input() key: string | null = null;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl(
          'https://www.youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl(
          'https://www.Vimeo.com/embed/' + this.key
        );
        break;
    }
    this.videoUrl = this.getSafeUrl(
      'https://www.youtube.com/embed/' + this.key
    );
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
