import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsHeaderComponent } from './movie-details-header.component';
import {IMovie} from "../../../core/interfaces/IMovie";

describe('MovieDetailsHeaderComponent', () => {
  let component: MovieDetailsHeaderComponent;
  let fixture: ComponentFixture<MovieDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsHeaderComponent);
    component = fixture.componentInstance;
    component.movie = {} as IMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
