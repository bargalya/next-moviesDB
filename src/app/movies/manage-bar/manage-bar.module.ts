import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../shared/shared.module";

import {FiltersComponent} from "./filters/filters.component";
import {ManageBarComponent} from "./manage-bar.component";
import {BackBtnComponent} from "./back-btn/back-btn.component";

@NgModule({
  declarations: [
    ManageBarComponent,
    FiltersComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ManageBarComponent
  ],
  providers: []
})
export class ManageBarModule {
}
