---
title: Backend
description: Documentación técnica de la arquitectura del backend de iTransCard 1.0, implementado en RPGLE (RPG ILE) en IBM i.
---
# Arquitectura del Backend 

## Resumen General

El backend de la aplicación iTransCard 1.0 está implementado en RPGLE (RPG ILE), un lenguaje de programación moderno utilizado en sistemas IBM i (AS/400). La arquitectura sigue un modelo de servicios web REST que proporciona APIs para la autenticación de usuarios y otras funcionalidades del sistema.

## Componentes Principales

### 1. Sistema de Autenticación

El sistema de autenticación está compuesto por múltiples programas RPGLE que trabajan juntos para proporcionar un mecanismo seguro de inicio de sesión, validación de sesiones y cierre de sesión:

- **authapi.rpgle**: Servicio principal de autenticación que procesa las solicitudes de inicio de sesión, crea tokens de sesión y los almacena en la base de datos.
- **authuser.rpgle**: Componente encargado de validar las credenciales de usuario contra los perfiles de usuario del sistema IBM i.
- **authvalida.rpgle**: Valida los tokens de sesión para garantizar que las solicitudes provienen de usuarios autenticados.
- **logout.rpgle**: Maneja el proceso de cierre de sesión, eliminando los tokens de sesión de la base de datos.

### 2. API Web

- **apiweb.rpgle**: Funciona como un controlador que maneja las solicitudes HTTP, procesa los parámetros de la URL y redirige las peticiones a los programas correspondientes. Incorpora validación básica de API keys.

### 3. Base de Datos

El sistema utiliza una tabla principal para el manejo de sesiones:

- **USRTOK**: Almacena los tokens de sesión junto con los nombres de usuario. Utilizada por los componentes de autenticación para mantener y validar las sesiones activas.

## Flujo de Autenticación

El sistema de autenticación sigue el siguiente flujo:

1. **Inicio de Sesión**:
   - El cliente realiza una petición POST a `/api/v0/authservice/` con las credenciales en formato JSON.
   - `authapi.rpgle` procesa la solicitud y utiliza `authuser.rpgle` para validar las credenciales contra el sistema.
   - Si la autenticación es exitosa, se genera un token de sesión utilizando un hash basado en el nombre de usuario, una API key y una marca de tiempo.
   - El token se almacena en la tabla USRTOK y se devuelve al cliente como una cookie HTTP.

2. **Validación de Sesión**:
   - Para solicitudes a recursos protegidos, el cliente envía el token en la cookie de sesión.
   - `authvalida.rpgle` extrae el token de la cookie y lo valida contra la tabla USRTOK.
   - Si el token es válido, permite el acceso a los recursos solicitados.

3. **Cierre de Sesión**:
   - El cliente solicita cerrar sesión.
   - `logout.rpgle` elimina el token de la tabla USRTOK y envía una cookie con expiración inmediata para eliminar la cookie en el navegador del cliente.

## Seguridad

El sistema implementa varias capas de seguridad:

1. **Autenticación de Credenciales**:
   - Utiliza la API QSYGETPH del sistema IBM i para validar perfiles de usuario.
   - Proporciona mensajes de error específicos para diferentes problemas de autenticación (usuario no encontrado, contraseña incorrecta, usuario deshabilitado).

2. **Protección de Sesiones**:
   - Genera tokens de sesión seguros mediante algoritmos de hash.
   - Las cookies de sesión utilizan los atributos HttpOnly y SameSite para prevenir ataques XSS y CSRF.
   - Se establece un tiempo de expiración para las sesiones (Max-Age=36000, aproximadamente 10 horas).

3. **Validación de API Keys**:
   - Las solicitudes a la API requieren una clave de API válida en la cabecera HTTP_AUTHORIZATION.
   - Se valida la presencia de la API key antes de procesar cualquier solicitud.

4. **Protección contra Manipulación de Datos**:
   - Los datos JSON recibidos son validados y analizados antes de su procesamiento.
   - Se implementa manejo de errores para evitar comportamientos inesperados.

## Procesamiento de Solicitudes

1. El cliente realiza una solicitud HTTP al servidor.
2. `apiweb.rpgle` captura la solicitud y determina el programa a ejecutar basado en la URL.
3. Para operaciones que requieren autenticación, se valida el token de sesión.
4. Se procesa la solicitud y se devuelve una respuesta en formato JSON al cliente.

## Implementación Técnica

- **Control de Transacciones**: Los programas utilizan grupos de activación (`ActGrp`) para controlar el ciclo de vida de los recursos del sistema.
- **Comunicación Web**: Utiliza las APIs de IBM `QtmhWrStout` y `QtmhRdStin` para leer y escribir datos HTTP.
- **Análisis JSON**: Utiliza la biblioteca YAJL para procesar datos en formato JSON.
- **Internacionalización**: Implementa conversión de conjunto de caracteres entre EBCDIC (utilizado por IBM i) y ASCII (utilizado por web).

## Limitaciones y Consideraciones

- El sistema está diseñado específicamente para entornos IBM i.
- La seguridad depende en parte de la infraestructura y configuración del servidor IBM i subyacente.
- Las respuestas de error podrían contener información que necesita ser revisada para prevenir posibles fugas de información sensible.

## Conclusión

La arquitectura backend de iTransCard 1.0 proporciona una implementación sólida de servicios web RESTful en un entorno IBM i, con un enfoque especial en la seguridad y autenticación de usuarios. El diseño modular permite una fácil extensión y mantenimiento del sistema.

