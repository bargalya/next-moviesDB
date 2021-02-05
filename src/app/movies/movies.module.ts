import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {ManageBarModule} from "./manage-bar/manage-bar.module";
import {SharedModule} from "../shared/shared.module";

import {MoviesListComponent} from "./movies-list/movies-list.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieItemComponent} from "./movies-list/movie-item/movie-item.component";
import {MovieDetailsHeaderComponent} from "./movie-details/movie-title/movie-details-header.component";
import { NoResultsFoundComponent } from './movies-list/no-results-found/no-results-found.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    MovieDetailsHeaderComponent,
    NoResultsFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ManageBarModule,
    SharedModule,
  ],
  providers: []
})
export class MoviesModule {
}
