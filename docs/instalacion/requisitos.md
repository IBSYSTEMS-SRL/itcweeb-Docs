---
title: Requisitos
description: Requisitos para la instalación de la aplicación
---

## Entorno de Desarrollo

### Requisitos del Sistema
- Sistema Operativo: Windows 10/11, macOS, o Linux
- Procesador: Intel Core i5/AMD Ryzen 5 o superior (multicore)
- Memoria RAM: Mínimo 8GB (16GB recomendado)
- Espacio en Disco: 2GB mínimo para el proyecto y dependencias
- Conexión a Internet: Requerida para instalación de dependencias y desarrollo

### Software Base
- Node.js (versión 18.x o superior)
- Yarn (versión 1.22.22 o superior)
- Git (última versión estable)
- Editor de código (recomendado: VSCode)

### IDEs y Extensiones Recomendadas
#### Visual Studio Code
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React Developer Tools
- GitHub Copilot (opcional)
- GitLens (opcional)

## Tecnologías y Frameworks

### Frontend
- React 19.0.0
- Vite 6.0.11
- Ionic React 8.4.2
- Tailwind CSS 4.0.0
- React Router DOM 7.1.3
- React Hook Form 7.54.2

### Herramientas de Desarrollo
- ESLint 9.18.0
- PostCSS 8.5.1
- Capacitor CLI 7.0.1
- TypeScript (tipos incluidos)

### Bibliotecas UI
- Radix UI (varios componentes)
- Lucide React (iconos)
- React Day Picker
- Recharts (gráficos)

## Configuración del Entorno

### 1. Instalación de Node.js
```bash
# Verificar la instalación
node --version  # Debe ser 18.x o superior
npm --version
```

### 2. Instalación de Yarn
```bash
npm install -g yarn
yarn --version  # Debe ser 1.22.22 o superior
```

### 3. Configuración de Git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 4. Variables de Entorno
Crear archivo `.env` con:
```
VITE_API_URL=<URL_DEL_BACKEND>
```

## Herramientas de Desarrollo Mobile

### Android Development
- Android Studio
- JDK (Java Development Kit)
- Android SDK
- Gradle

### iOS Development (solo macOS)
- Xcode
- CocoaPods
- iOS Simulator

## Scripts de Desarrollo
```bash
# Desarrollo
yarn dev           # Inicia servidor de desarrollo
yarn build        # Compila para producción
yarn preview      # Preview de producción
yarn lint         # Ejecuta ESLint

# Mobile
yarn ionic:serve  # Desarrollo con Ionic
yarn ionic:build  # Build para mobile
```

## Consideraciones Adicionales

### Control de Versiones
- Utilizar Git Flow como flujo de trabajo
- Crear ramas feature/ para nuevas características
- Crear ramas hotfix/ para correcciones urgentes
- Mantener main/master y develop como ramas principales

### Estándares de Código
- Seguir guías de estilo de ESLint
- Utilizar Prettier para formateo de código
- Escribir comentarios en español
- Seguir principios de Clean Code

### Seguridad
- No compartir variables de entorno en el repositorio
- Mantener dependencias actualizadas
- Revisar vulnerabilidades con `yarn audit`
- No exponer información sensible en logs

### Optimización
- Optimizar imágenes y assets
- Implementar lazy loading donde sea posible
- Seguir buenas prácticas de rendimiento de React
- Minimizar el tamaño de los bundles

## Soporte y Recursos
- Documentación de React: [https://react.dev/](https://react.dev/)
- Documentación de Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Documentación de Ionic: [https://ionicframework.com/docs](https://ionicframework.com/docs)
- Documentación de Tailwind: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

