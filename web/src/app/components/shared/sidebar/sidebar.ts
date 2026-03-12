import { Component, input } from '@angular/core';

export interface SidebarItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  /** Id del ítem activo (ej. 'usuarios') para resaltar en el menú */
  activeItemId = input<string | null>(null);

  readonly items: SidebarItem[] = [
    { id: 'dashboard', label: 'dashboard general' },
    { id: 'usuarios', label: 'Usuarios' },
    { id: 'comportamientos', label: 'Comportamientos' },
    { id: 'kpis', label: 'KPIS' },
    { id: 'analisis', label: 'Analisis predictivo' },
  ];
}
