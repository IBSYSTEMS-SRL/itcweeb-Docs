## 🔑 Endpoint: Autenticación

### `POST /api/login`
📌 **Descripción:** Permite a un usuario autenticarse en el sistema.

#### 🔹 **Parámetros:**
| Campo      | Tipo     | Requerido | Descripción               |
|------------|---------|-----------|---------------------------|
| `username` | String  | ✅ Sí     | Nombre de usuario         |
| `password` | String  | ✅ Sí     | Contraseña en texto plano |

#### 🔹 **Respuesta:**
```json
{
  "token": "abc123",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "role": "admin"
  }
}
