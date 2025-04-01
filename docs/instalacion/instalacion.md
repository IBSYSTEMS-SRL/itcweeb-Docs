---
title: Instalación y Configuración
---
# Instalación - ITransCard 1.0

## Requisitos Previos
- Node.js (versión 18.x o superior)
- Yarn (versión 1.22.x o superior)
- Git

## Pasos de Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/IBSYSTEMS-SRL/itranscard1.0.git
cd itranscard1.0

```

### 2. Instalar Dependencias
```bash
yarn install
```

### 3. Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables (consultar con el equipo de desarrollo los valores específicos):
```
VITE_API_URL=<URL_DE_LA_API>
```

### 4. Iniciar la Aplicación en Modo Desarrollo
```bash
yarn dev
```
La aplicación estará disponible en `http://localhost:5173` por defecto.

### 5. Compilar para Producción
```bash
yarn build
```
Los archivos compilados se generarán en el directorio `dist/`.

## Tecnologías Principales
- React 19.0.0
- Vite 6.0.11
- Ionic React 8.4.2
- Tailwind CSS 4.0.0
- Capacitor 7.0.1 (para funcionalidades móviles)

## Scripts Disponibles
- `yarn dev`: Inicia el servidor de desarrollo
- `yarn build`: Compila la aplicación para producción
- `yarn preview`: Previsualiza la versión de producción localmente
- `yarn lint`: Ejecuta el linter para verificar el código

## Notas Adicionales
- La aplicación utiliza Capacitor para funcionalidades móviles
- Se implementa React Router para la navegación
- Incluye integración con componentes Radix UI
- Utiliza React Hook Form para manejo de formularios
- Implementa Zod para validación de datos

## Solución de Problemas Comunes
1. Si hay problemas con las dependencias:
```bash
rm -rf node_modules
yarn cache clean
yarn install
```

2. Si hay errores de compilación:
- Verificar que las versiones de Node.js y Yarn sean compatibles
- Asegurarse de que todas las variables de entorno necesarias estén configuradas

## Requerimientos del Sistema
- Espacio en disco: Mínimo 1GB libre
- Memoria RAM: Mínimo 4GB (8GB recomendado)
- Procesador: 2 núcleos o superior
- Navegadores soportados: Chrome (última versión), Firefox (última versión), Safari (última versión)

## Contacto y Soporte
Para problemas técnicos o consultas, contactar al equipo de desarrollo.

