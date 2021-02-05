import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IMovie} from "../../../core/interfaces/IMovie";

@Component({
  selector: 'app-movie-details-header',
  templateUrl: './movie-details-header.component.html',
  styleUrls: ['./movie-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsHeaderComponent {
  @Input() movie: IMovie;

  ratingTooltipTemplate = "Movie rating: {rating}";
}
