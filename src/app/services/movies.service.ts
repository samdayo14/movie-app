import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseURL: string = 'https://api.themoviedb.org/3';
  apiKey: string = '27bac42752c910c91a7121f292212cc3';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(
      `${this.baseURL}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
