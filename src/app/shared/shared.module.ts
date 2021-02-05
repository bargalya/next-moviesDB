import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {RatingComponent} from './rating/rating.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RateTooltipPipe} from "./rating/rate-tooltip.pipe";

@NgModule({
  declarations: [
    RatingComponent,
    SearchBoxComponent,
    RateTooltipPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    RatingComponent,
    SearchBoxComponent
  ],
})
export class SharedModule {
}
