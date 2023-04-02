import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url ="SuperHero";
  constructor(private http: HttpClient) { }


  public getSuperHeroes() : Observable<SuperHero[]> {

    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`)


    // no longer need to hard code hero with http client calling our UI
    // let hero = new SuperHero();
    // hero.id = 1;
    // hero.name = "Spider Man";
    // hero.firstName = "Peter";
    // hero.lastName = "Parker";
    // hero.place = "New York City"

    //return [hero];
  }
}
