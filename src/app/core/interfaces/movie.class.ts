import {IMovie} from "./IMovie";

export class Movie implements IMovie {
  download: string;
  id: string;
  image: string;
  imdbid: string;
  largeimage: string;
  rating: number;
  released: string;
  runtime: string;
  synopsis: string;
  title: string;
  type: string;
  unogsdate: string;

  constructor(obj: IMovie) {
    Object.assign(this, obj);
    this.rating = this.rating || 0;
  }
}
