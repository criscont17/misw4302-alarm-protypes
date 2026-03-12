# Alarm Web Prototype (Angular)

Prototipo web de la aplicación de alarmas para validación UX/UI.

## Diseño (Figma)

Todas las pantallas del prototipo web están basadas en los mockups del siguiente enlace:

**[Mockups App Alarmas (pantallas web)](https://www.figma.com/design/AmDGzKDwnwWVURtsKDOzIZ/MockupsAppAlarmas?node-id=52-2622&t=lvkt7rfgeH9jqUST-0)**

## Pantallas implementadas

| Ruta         | Pantalla      | Descripción                                    |
| ------------ | ------------- | ---------------------------------------------- |
| `/login`     | **Login**     | Iniciar sesión (punto de entrada por defecto). |
| `/dashboard` | **Dashboard** | Panel principal con resumen y gráficos.        |
| `/usuarios`  | **Usuarios**  | Tabla de usuarios con datos mock.              |

## Tecnologías

- **Angular** 21 (standalone components, lazy loading)
- **TypeScript** 5.9
- **Angular Router** para navegación
- **SCSS** para estilos (variables, layout, componentes)
- **RxJS** para reactividad

## Estructura del proyecto

```
web/
├── src/
│   ├── app/
│   │   ├── pages/              # Una pantalla = un componente de página
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   └── usuarios/
│   │   ├── components/
│   │   │   └── shared/         # Componentes reutilizables (sidebar, etc.)
│   │   ├── assets/             # Imágenes y recursos estáticos
│   │   ├── styles/             # SCSS global
│   │   │   ├── _variables.scss
│   │   │   ├── _layout.scss
│   │   │   └── _components.scss
│   │   ├── mock/               # Datos mock (usuarios.mock.ts)
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── main.ts
│   ├── index.html
│   └── styles.scss
├── public/
├── angular.json
├── package.json
└── tsconfig.json
```

## Instalación y configuración

### Requisitos

- **Node.js** 18 o superior  
- **npm** (o el gestor de paquetes del proyecto)

### Pasos

1. **Clonar el repositorio** (si aplica) y entrar a la carpeta `web`:

   ```bash
   cd web
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Arrancar el servidor de desarrollo:**

   ```bash
   npm start
   ```
   o:
   ```bash
   ng serve
   ```

4. Abrir en el navegador: [http://localhost:4200](http://localhost:4200). Por defecto se redirige a `/login`.
