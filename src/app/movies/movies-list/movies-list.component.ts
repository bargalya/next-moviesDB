import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {MoviesService} from "../../core/services/movies.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(public moviesServices: MoviesService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.sub = this.moviesServices.getMovies().subscribe(results => {
      this.moviesServices.movies$.next(results);
    });
    this.titleService.setTitle('Next Movie DB');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

