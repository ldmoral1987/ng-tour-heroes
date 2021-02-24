import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(
    private messageService: MessageService,
    private angularFirestore: AngularFirestore
    ) { }

  //getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
  //  this.messageService.add('HeroService: fetched heroes');
  //  return of(HEROES);
  //}

  getHeroes() {
    //this.messageService.add("HeroService: fetched heroes");

    // this looks a bit complicated but it is necessary to use
    // the auto generated id as the id of the entity
    return this.angularFirestore.collection("heroes").snapshotChanges();
    //return this.angularFirestore.collection("heroes").snapshotChanges();
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id)) as Observable<Hero>;
  }
}
