import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'comprar/:nombre/:descripcion/:precio/:imagen/:cantidad',
    loadComponent: () => import('./comprar/comprar.page').then( m => m.ComprarPage)
  },
];
