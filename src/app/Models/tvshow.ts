export interface Tv {
  genres: genre[];
  adult: boolean;
  backdrop_path: string;
  genre: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  video: false;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  created_by: created_by$[];
  tagline: string;
  seasons: season[];
}

export interface genre {
  id: number;
  name: string;
}

export interface season {
  air_date: number;
  name: string;
}

export interface created_by$ {
  id: number;
  name: string;
}

export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}
