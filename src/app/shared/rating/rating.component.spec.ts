import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RatingComponent} from './rating.component';
import {RateTooltipMocker} from "../../mockers/rateTooltipMocker";
import {ERateType} from "./ERateType";

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent, RateTooltipMocker],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create rating star array with: 1 full star', () => {
    let ratingStarsArr =  Array(10).fill(ERateType.empty);
    component.rate = 1;
    component.generateStars();
    ratingStarsArr[0] = ERateType.full;
    expect(component.ratingStarts).toEqual(ratingStarsArr);
  });

  it('should create rating star array with: 1 full, 1 half', () => {
    let ratingStarsArr =  Array(10).fill(ERateType.empty);
    component.rate = 1.3;
    component.generateStars();
    ratingStarsArr[0] = ERateType.full;
    ratingStarsArr[1] = ERateType.partial;
    expect(component.ratingStarts).toEqual(ratingStarsArr);
  });

  it('should create rating star array with: 2 full, 1 half, round down', () => {
    let ratingStarsArr =  Array(10).fill(ERateType.empty);
    component.rate = 2.7;
    component.generateStars();
    ratingStarsArr[0] = ERateType.full;
    ratingStarsArr[1] = ERateType.full;
    ratingStarsArr[2] = ERateType.partial;
    expect(component.ratingStarts).toEqual(ratingStarsArr);
  });

  it('should create rating star array with: 10 full', () => {
    let ratingStarsArr =  Array(10).fill(ERateType.full);
    component.rate = 10;
    component.generateStars();
    expect(component.ratingStarts).toEqual(ratingStarsArr);
  });

  it('should create rating star array with: 10 empty', () => {
    let ratingStarsArr =  Array(10).fill(ERateType.empty);
    component.rate = 0;
    component.generateStars();
    expect(component.ratingStarts).toEqual(ratingStarsArr);
  });

});
