import { Component } from '@angular/core';
import { Sidebar } from '../../components/shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly usuariosActivos = [
    { id: '1', nombre: 'Usuario 1', imagen: 'assets/dashboard/usuario-1.png' },
    { id: '2', nombre: 'Usuario 2', imagen: 'assets/dashboard/usuario-2.png' },
    { id: '3', nombre: 'Usuario 3', imagen: 'assets/dashboard/usuario-3.png' },
    { id: '4', nombre: 'Usuario 4', imagen: 'assets/dashboard/usuario-4.png' },
  ];
}
