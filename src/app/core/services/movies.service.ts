import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {map, tap} from "rxjs/operators";

import {IMovie} from "../interfaces/IMovie";
import {Movie} from "../interfaces/movie.class";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies$ = new ReplaySubject<IMovie[]>(1);
  titleFilter = '';
  ratingFilter = 0;
  private _movieAPI = 'api/movies';
  private _orgMovies: IMovie[] = [];

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this._movieAPI).pipe(
      map(results => this.convert(results)),
      map(results => this.sortByTitle(results)),
      tap(results => this._orgMovies = results)
    );
  }

  convert(results: IMovie[]): IMovie[] {
    return results.map((movie:IMovie) => new Movie(movie));
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie[]>(`${this._movieAPI}/${id}`).pipe(
      map(results => this.convert(results)),
      map((items: IMovie[]) => items[0])
    );
  }

  filterByTitle(text: string): void {
    this.titleFilter = text;
    this.activateFilter();
  }

  filterByRating(rate: number): void {
    this.ratingFilter = rate;
    this.activateFilter();
  }

  clearFilters(): void {
    this.titleFilter = '';
    this.ratingFilter = 0;
    this.activateFilter();
  }

  private activateFilter(): void {
    let org = [...this._orgMovies];
    this.movies$.next(this.filter(org));
  }

  filter(org: IMovie[]): IMovie[] {
    return org.filter(movie =>
      movie.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      movie.rating >= this.ratingFilter);
  }

  sortByTitle(movies: IMovie[]): IMovie[] {
    return movies.sort((a, b) => a.title.localeCompare(b.title));
  }
}
