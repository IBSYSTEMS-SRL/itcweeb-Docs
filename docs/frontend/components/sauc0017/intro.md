---
title: "SAUC0017 (Transacciones)"
---

# Guía del Módulo SAUC0017 (Transacciones)

## Tabla de Transacciones
```jsx
import { TransactionTable } from '@/components/sauc0017/data-table/Table'
import { transactionColumns } from '@/components/sauc0017/data-table/Columns'

// Uso básico
<TransactionTable
  data={transactions}
  columns={transactionColumns}
  onRowClick={handleTransactionSelect}
  filters={activeFilters}
/>

// Configuración de filtros
interface FilterConfig {
  field: string
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan'
  value: any
}
```

## Detalles de Transacción
```jsx
import { TransactionDetails } from '@/components/sauc0017/transaction-details/MainDetails'

// Uso básico
<TransactionDetails
  transactionId={selectedId}
  onUpdate={handleUpdate}
  permissions={userPermissions}
/>

// Props necesarias
interface TransactionDetailsProps {
  transactionId: string
  onUpdate: (data: TransactionData) => Promise<void>
  permissions: string[]
}
```

