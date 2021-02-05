import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-manage-bar',
  templateUrl: './manage-bar.component.html',
  styleUrls: ['./manage-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageBarComponent {
  @Input() showFilters = false;
  @Input() showBackBtn = false;
  welcomeText = "Welcome to NEXT Movie DB - Kfar Saba";
}
