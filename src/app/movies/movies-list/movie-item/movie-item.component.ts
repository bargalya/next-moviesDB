import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IMovie} from "../../../core/interfaces/IMovie";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent {
  @Input() movie: IMovie;
}
