import { Component } from '@angular/core';
import { Sidebar } from '../../components/shared/sidebar/sidebar';
import { USUARIOS_MOCK } from '../../mock/usuarios.mock';

@Component({
  selector: 'app-usuarios',
  imports: [Sidebar],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  readonly usuarios = USUARIOS_MOCK;
}
