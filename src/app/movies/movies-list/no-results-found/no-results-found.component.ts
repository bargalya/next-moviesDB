import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-no-results-found',
  templateUrl: './no-results-found.component.html',
  styleUrls: ['./no-results-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsFoundComponent {
  message = "No results found";

}
