---
title: API del Backend
---

# 📡 API REST del Backend

Nuestra API en RPGLE permite la comunicación entre el frontend y el backend.

## 📌 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|---------|-------------|
| `POST` | `/api/login` | Iniciar sesión |
| `GET`  | `/api/usuarios` | Obtener lista de usuarios |
| `POST` | `/api/usuarios` | Crear usuario |
| `PUT`  | `/api/usuarios/:id` | Actualizar usuario |
| `DELETE` | `/api/usuarios/:id` | Eliminar usuario |

Ejemplo de uso:
```bash
curl -X GET https://tu-api.com/api/usuarios 
```