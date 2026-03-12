# Alarm Prototype (Android)

Prototipo Android de la aplicación de alarmas para validación UX/UI.

## Diseño (Figma)

Todas las pantallas del prototipo móvil están basadas en los mockups del siguiente enlace:

**[Mockups App Alarmas (pantallas móvil)](https://www.figma.com/design/AmDGzKDwnwWVURtsKDOzIZ/MockupsAppAlarmas?node-id=0-1&p=f&t=TxaTSQXMKPyCE8Pe-0)**

## Pantallas implementadas

| Pantalla           | Activity / Layout                                       | Descripción                                                             |
| ------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Bienvenida**     | `BienvenidaActivity` / `activity_bienvenida.xml`        | Pantalla de bienvenida con opciones para iniciar sesión o crear cuenta. |
| **Crear cuenta**   | `CrearCuentaActivity` / `activity_crear_cuenta.xml`     | Formulario de registro.                                                 |
| **Iniciar sesión** | `IniciarSesionActivity` / `activity_iniciar_sesion.xml` | Formulario de inicio de sesión.                                         |

Cada pantalla cuenta con ViewModel y UiState como base para futura lógica.

## Tecnologías

- **Kotlin** 1.x
- **Android SDK**: minSdk 24, targetSdk 34, compileSdk 34
- **AndroidX**: Core KTX, AppCompat, Activity KTX
- **Material Design** (Material Components)
- **ConstraintLayout** para layouts
- **ViewBinding** para acceso a vistas
- **ViewModel** y **Lifecycle** (architecture components)
- **Kotlin Coroutines** (android)

## Estructura del proyecto

```
mobile/
├── app/
│   ├── src/main/
│   │   ├── java/com/alarmprototype/
│   │   │   ├── ui/
│   │   │   │   ├── bienvenida/       # Bienvenida (Activity, ViewModel, UiState)
│   │   │   │   ├── crearcuenta/      # Crear cuenta
│   │   │   │   ├── iniciarsesion/    # Iniciar sesión
│   │   │   │   └── components/       # Componentes UI reutilizables
│   │   │   ├── data/                 # Capa de datos (placeholder)
│   │   │   ├── domain/               # Capa de dominio (placeholder)
│   │   │   ├── di/                   # Inyección de dependencias (placeholder)
│   │   │   └── utils/                # Utilidades (placeholder)
│   │   ├── res/
│   │   │   ├── layout/               # activity_bienvenida, activity_crear_cuenta, activity_iniciar_sesion
│   │   │   ├── drawable/
│   │   │   ├── values/               # colors, themes, strings
│   │   │   └── font/
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts
├── build.gradle.kts
└── settings.gradle.kts
```

## Instalación y configuración

### Requisitos

- **Android Studio** (Ladybug o superior recomendado)
- **JDK 17**
- **Android SDK** con minSdk 24 y targetSdk 34

### Pasos

1. **Abrir el proyecto** en Android Studio (carpeta `mobile` como raíz del proyecto).
2. **Sincronizar Gradle** (File → Sync Project with Gradle Files o el botón del elefante).
3. **Ejecutar** en emulador o dispositivo físico (Run ▶ o `Shift+F10`).

No se requieren variables de entorno ni archivos de configuración adicionales para el prototipo.

### Convenciones

- Una pantalla = una Activity con ViewModel y UiState.
- Navegación mediante Intents entre Activities.
- Layouts con ConstraintLayout; estilos y temas en `res/values/`.
  
## APK

En el siguiente enlace podrá descargar el APK para probar el prototipo desarrollado:  **[Alarm Protype](https://drive.google.com/drive/folders/1Lb6Nnt3OUH7apuH63r-nhUroUUOXB2lo?usp=sharing)**
