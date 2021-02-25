import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // Se suscribe al servicio para obtener todos los héroes desde firestore
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res =>(this.heroes = res));
  }
}
