# 🔑 Autenticación

## 🔹 Flujo de Login
1️⃣ El usuario envía su **usuario** y **contraseña**.  
2️⃣ El servidor valida las credenciales en IBM i.  
3️⃣ Si son correctas, se devuelve un **token API**.  
4️⃣ El token se usa en cada petición para autenticación.  

## 🔹 Endpoint: `POST /api/login`
```json
{
  "username": "admin",
  "password": "123456"
}
```

## 📌 Respuesta

```json
{
  "token": "abc123",
  "user": {
    "id": 1,
    "name": "Admin",
    "role": "admin"
  }
}
```
## 📌 Errores Comunes
- **401 Unauthorized**: Credenciales incorrectas.
- **403 Forbidden**: Token inválido o expirado.
- **500 Internal Server Error**: Error en el servidor.
- **400 Bad Request**: Datos de entrada inválidos.
- **404 Not Found**: Recurso no encontrado.
- **422 Unprocessable Entity**: Datos de entrada no válidos.