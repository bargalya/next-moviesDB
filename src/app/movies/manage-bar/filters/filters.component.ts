import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MoviesService} from "../../../core/services/movies.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  removeFiltersLabel = "Remove all filters";
  filterTitleLabel = "Filter by title";
  filterRatingLabel = "Filter by rating";
  filterRatingTooltip = "Movies with rating better than: {rating}";
  filterText = '';

  constructor(public moviesService: MoviesService) {
  }

  filterByRating(rating: number): void {
    this.moviesService.filterByRating(rating);
  }

  filterByTitle(text: string): void {
    this.filterText = text;
    this.moviesService.filterByTitle(text);
  }

  clearFilters(): void {
    this.filterText = '';
    this.moviesService.clearFilters();
  }

}
