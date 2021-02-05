import {Observable, of, ReplaySubject} from "rxjs";
import {IMovie} from "../core/interfaces/IMovie";

export class MoviesServiceMocker {
  movies$ = new ReplaySubject<IMovie[]>(1);
  getMovies(): Observable<IMovie[]> {
    return of([]);
  }

  getMovie(id: number): Observable<IMovie> {
    return of();
  }

  filterByTitle(text: string): void {
  }

  filterByRating(rate: number): void {
  }

  clearFilters(): void {
  }
}

