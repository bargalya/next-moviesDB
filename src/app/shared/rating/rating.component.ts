import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ERateType} from "./ERateType";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rate = 0;
  @Input() isReadOnly = false;
  @Input() tooltipTemplate: string;
  @Output() rateChange = new EventEmitter<number>();

  ratingStarts: ERateType[];

  ngOnInit(): void {
    this.generateStars();
  }

  setRating(newRate: number): void {
    newRate +=1;
    this.rate = newRate;
    this.generateStars();
    this.rateChange.emit(newRate);
  }

  generateStars() {
  let maxRate = 10;
    this.ratingStarts = Array(maxRate).fill(ERateType.empty).fill(ERateType.full, 0, this.rate);

    if((this.rate % 1) > 0) {
      let partialIndex = Math.floor(this.rate);
      this.ratingStarts[partialIndex] = ERateType.partial;
    }
  }

  get ERateType(): typeof ERateType {
    return ERateType;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateStars();
  }
}
