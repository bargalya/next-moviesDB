import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() searchText: string;
  @Output() searchTextChange = new EventEmitter<string>();

  searchFormControl = new FormControl('');
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.searchFormControl.valueChanges.subscribe((value: string) => {
      this.searchTextChange.emit(value.toLowerCase().trim());
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchText) {
      this.searchFormControl.setValue(this.searchText, {emitEvent: false});
    }
  }

  clearText() {
    this.searchFormControl.setValue('');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
