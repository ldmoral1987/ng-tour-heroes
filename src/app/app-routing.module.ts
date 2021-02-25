import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
