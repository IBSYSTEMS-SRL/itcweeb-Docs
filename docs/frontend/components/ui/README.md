# Guía de Componentes UI

Esta guía proporciona información detallada sobre cómo utilizar los componentes UI del sistema.

## Componentes Base

### Button (`button.tsx`)
```jsx
import { Button } from '@/components/ui/button'

// Uso básico
<Button variant="primary">Click me</Button>

// Props disponibles
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}
```

### Input (`input.tsx`)
```jsx
import { Input } from '@/components/ui/input'

// Uso básico
<Input 
  type="text"
  placeholder="Enter your text"
  onChange={(e) => handleChange(e)}
/>

// Props disponibles
interface InputProps {
  type: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  disabled?: boolean
  error?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
```

