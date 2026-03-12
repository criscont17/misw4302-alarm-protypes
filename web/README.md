# Alarm Web Prototype (Angular)

Prototipo de aplicación de alarmas para validación UX/UI (parte web).

## Objetivo

- Validar diseño y flujos con fidelidad visual a los mockups.
- Navegación básica entre pantallas con Angular Router.
- Funcionamiento **offline**; sin APIs, base de datos ni backend.

## Requisitos

- Node.js 18+
- npm (o el gestor de paquetes configurado en el proyecto)

## Cómo ejecutar

```bash
npm install
ng serve
```

Abrir en el navegador: [http://localhost:4200](http://localhost:4200).

Por defecto se redirige a `/login`. Rutas disponibles:

- `/login` – Iniciar sesión
- `/dashboard` – Dashboard
- `/usuarios` – Tabla de usuarios (datos mock)

## Estructura del proyecto

```
src/
  app/
    pages/           # Una pantalla = un componente de página
      login/
      dashboard/
      usuarios/
    components/
      shared/        # Componentes UI reutilizables
    assets/          # Recursos estáticos de la app
    styles/         # SCSS global (variables, layout, componentes)
      _variables.scss
      _layout.scss
      _components.scss
    mock/           # Datos mock para prototipo offline
      usuarios.mock.ts
  styles.scss       # Punto de entrada de estilos globales
  main.ts
```

## Convenciones

- **Layout:** Flexbox preferido; CSS Grid solo si hace falta.
- **Estilos:** SCSS.
- **Navegación:** Angular Router con rutas simples.
- **Datos:** Mock en `app/mock/` (ej. tabla de usuarios).

## Build

```bash
ng build
```

Salida en `dist/`.
