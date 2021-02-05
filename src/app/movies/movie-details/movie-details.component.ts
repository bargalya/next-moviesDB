import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs";

import {MoviesService} from "../../core/services/movies.service";
import {IMovie} from "../../core/interfaces/IMovie";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<IMovie>;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      switchMap(params => this.moviesService.getMovie(params['id'])),
      tap(movie => this.titleService.setTitle(movie.title)));
  }

}
