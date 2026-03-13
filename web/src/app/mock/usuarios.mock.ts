/**
 * Mock de usuarios para la tabla de la página Usuarios.
 * Uso exclusivo del prototipo (offline, sin backend).
 */

export interface UsuarioMock {
  nombre: string;
  email: string;
  estado: string;
  porcentaje_cumplimiento: number;
}

export const USUARIOS_MOCK: UsuarioMock[] = [
  { nombre: 'Ana García', email: 'ana.garcia@ejemplo.com', estado: 'Activo', porcentaje_cumplimiento: 92 },
  { nombre: 'Carlos López', email: 'carlos.lopez@ejemplo.com', estado: 'Activo', porcentaje_cumplimiento: 78 },
  { nombre: 'María Fernández', email: 'maria.fernandez@ejemplo.com', estado: 'Inactivo', porcentaje_cumplimiento: 65 },
  { nombre: 'Pedro Sánchez', email: 'pedro.sanchez@ejemplo.com', estado: 'Activo', porcentaje_cumplimiento: 100 },
  { nombre: 'Laura Martínez', email: 'laura.martinez@ejemplo.com', estado: 'Pendiente', porcentaje_cumplimiento: 45 },
];
