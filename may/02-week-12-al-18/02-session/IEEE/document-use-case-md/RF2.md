# Caso de Uso: Registro de Inventario (RF002)

## 1. Identificación
- **Nombre del Caso de Uso:** Registro de Inventario
- **Identificador:** UC-002
- **Actores:** Administrador del Sistema
- **Prioridad:** Alta
- **Precondiciones:** El sistema debe estar en funcionamiento

## 2. Descripción
El administrador del sistema debe poder gestionar el inventario de productos, incluyendo registro, modificación y eliminación de productos.

## 3. Flujo Principal
1. El administrador selecciona la opción "Gestionar Inventario"
2. El sistema muestra el menú de opciones de inventario
3. El administrador selecciona "Registrar Producto"
4. El sistema muestra el formulario de registro de producto
5. El administrador ingresa los datos del producto:
   - Código único
   - Nombre del producto
   - Descripción
   - Categoría (opcional)
   - Precio unitario
   - Cantidad en stock
6. El sistema valida que el código sea único
7. El sistema guarda los datos del producto
8. El sistema muestra mensaje de confirmación

## 4. Flujos Alternativos
### 4.1 Código de Producto Duplicado
1. El sistema detecta que el código ya existe
2. El sistema muestra mensaje de error
3. El administrador debe ingresar un código diferente

### 4.2 Stock Negativo
1. El administrador intenta ingresar cantidad negativa
2. El sistema muestra mensaje de error
3. El administrador debe ingresar una cantidad válida

### 4.3 Modificación de Producto
1. El administrador selecciona un producto existente
2. El sistema muestra los datos actuales
3. El administrador modifica los datos necesarios
4. El sistema actualiza la información

### 4.4 Eliminación de Producto
1. El administrador selecciona un producto para eliminar
2. El sistema solicita confirmación
3. El administrador confirma la eliminación
4. El sistema elimina el producto

## 5. Postcondiciones
- El producto queda registrado/modificado/eliminado en el sistema
- El sistema actualiza la lista de productos
- Se genera reporte de productos con bajo inventario si aplica

## 6. Requisitos Especiales
- El código del producto debe ser único
- El stock no puede ser negativo
- El precio unitario debe ser mayor que cero
- El sistema debe mantener un historial de cambios

## 7. Extensiones
- El sistema permite búsqueda de productos por diferentes criterios
- El sistema permite ordenar productos por nombre, stock o categoría
- El sistema genera alertas de stock bajo

## 8. Notas y Problemas
- Los campos obligatorios son: código, nombre, precio y cantidad
- El sistema debe mantener un registro de movimientos de inventario
- Se debe implementar un sistema de respaldo para los datos del inventario 