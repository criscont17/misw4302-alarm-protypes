import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface SidebarItem {
  id: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  /** Id del ítem activo */
  activeItemId = input<string | null>(null);

  readonly items: SidebarItem[] = [
    { id: 'dashboard', label: 'dashboard general', route: '/dashboard' },
    { id: 'usuarios', label: 'Usuarios', route: '/usuarios' },
    { id: 'comportamientos', label: 'Comportamientos' },
    { id: 'kpis', label: 'KPIS' },
    { id: 'analisis', label: 'Analisis predictivo' },
  ];
}
