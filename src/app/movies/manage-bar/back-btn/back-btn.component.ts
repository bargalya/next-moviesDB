import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackBtnComponent {
}
