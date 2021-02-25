import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { formattedError } from '@angular/compiler';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  heroes: any;
  id!: String;
  element: any;
  encontrado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // Se suscribe al servicio para obtener todos los héroes desde firestore
  getHeroes(): void {
    // Se obtiene el parámetro get id de la ruta del navegador
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Se inserta código dentro de la suscripción. Debe hacerse de esta forma
    // puesto que la suscripción es asíncrona, y no podemos garantizar cuándo
    // se van a recibir los datos, por eso el código se inserta dentro.
    this.heroService.getHeroes().subscribe(res =>
      {
        this.heroes = res;
        this.encontrado = false;

        // Se comprueba si el héroe seleccionado existe en la colección
        for (let hero of this.heroes) {
          if (hero.payload.doc.data().id == this.id)
            this.encontrado = true;
        }

        // Si el héroe no existe, se redirige al usuario a la página 404
        if (!this.encontrado)
        {
          this.router.navigateByUrl('/404', {skipLocationChange: true});
        }
      }
    );
  }

  // Vuelve atrás en la historia del navegador
  goBack(): void {
    this.location.back();
  }
}
