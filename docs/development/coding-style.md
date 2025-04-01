---
title: "Estándares de Código"
slug: /estandares-codigo
---
# 📝 Estándares de Código

Para mantener un código limpio y mantenible, seguimos las siguientes convenciones:

## 🔹 ReactJS
✅ Usar **Componentes Funcionales**  
✅ Aplicar **Hooks** como `useState` y `useEffect`  
✅ Estilizar con **CSS Modules o Tailwind**

```jsx
// ❌ Incorrecto
class Button extends React.Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

// ✅ Correcto
function Button({ label }) {
  return <button>{label}</button>;
}
```
## 🔹 RPGLE
✅ Seguir la sintaxis Free Format
✅ Mantener los programas con comentarios claros
✅ Evitar el uso de GOTO y estructuras complejas

```rpg
// ❌ Incorrecto
// ❌ Incorrecto
GOTO ERROR;

// ✅ Correcto
IF status <> 'OK';
   CALLP logError();
ENDIF;
```