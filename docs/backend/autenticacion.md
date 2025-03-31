---
title: Autenticación
---

# 🔑 Autenticación y Seguridad

Nuestra aplicación utiliza autenticación basada en **tokens API generados por AS400**.

## 🔄 Flujo de Autenticación

1. **El usuario envía credenciales** (`usuario`, `contraseña`).
2. **AS400 valida credenciales** y genera un **token**.
3. **El frontend usa el token** en cada petición.

Ejemplo de autenticación en el frontend:
```js
fetch('https://tu-api.com/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ usuario: 'admin', contraseña: '1234' })
})
.then(res => res.json())
.then(data => console.log(data.token));