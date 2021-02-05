import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MoviesListComponent} from './movies-list.component';
import {MoviesService} from "../../core/services/movies.service";
import {MoviesServiceMocker} from "../../mockers/moviesServiceMocker";

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      providers: [{provide: MoviesService, useClass: MoviesServiceMocker}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
