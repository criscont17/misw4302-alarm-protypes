import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  usuario = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Navegación simple para prototipo (sin validación real)
    this.router.navigate(['/dashboard']);
  }
}
