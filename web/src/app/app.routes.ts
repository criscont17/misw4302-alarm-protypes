import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard) },
  { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios').then((m) => m.Usuarios) },
  { path: '**', redirectTo: 'login' },
];
