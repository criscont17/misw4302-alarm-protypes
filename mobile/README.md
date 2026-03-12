# Alarm Prototype (Android)

Prototipo de aplicación de alarmas para validación UX/UI.

## Requisitos

- Android Studio (Ladybug o superior)
- JDK 17
- minSdk 24, targetSdk 34

## Estructura del proyecto

```
app/src/main/java/com/alarmprototype/
├── ui/
│   ├── bienvenida/      # Pantalla de bienvenida (Activity, ViewModel, UiState)
│   ├── crearcuenta/     # Pantalla crear cuenta
│   ├── iniciarsesion/   # Pantalla iniciar sesión
│   └── components/      # Componentes UI reutilizables
├── data/                # Capa de datos
├── domain/              # Capa de dominio
├── di/                  # Inyección de dependencias
└── utils/               # Utilidades

app/src/main/res/
├── layout/
├── drawable/
├── values/
└── font/
```

## Cómo ejecutar

1. Abrir el proyecto en Android Studio.
2. Sincronizar Gradle.
3. Ejecutar en emulador o dispositivo (Run ▶).

## Convenciones

- Navegación por Activities e Intents.
- ConstraintLayout para layouts.
- Una pantalla = una Activity (con ViewModel y UiState como placeholder).
