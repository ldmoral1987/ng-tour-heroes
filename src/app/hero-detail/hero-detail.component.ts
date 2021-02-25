import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    try {
      const id: string = this.route.snapshot.paramMap.get('id')!;
      this.hero = this.heroService.getHero(id);
      alert(this.hero)
      if (!this.hero)
        this.router.navigateByUrl('/404', {skipLocationChange: true});
    } catch (err)
    {
      this.router.navigateByUrl('/404', {skipLocationChange: true});
    }
  }

  goBack(): void {
    this.location.back();
  }
}
