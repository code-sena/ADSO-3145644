# Caso de Uso: Registro de Inventario (RF002)

| Elemento | Descripción |
|----------|-------------|
| **Nombre del Caso de Uso** | Registro de Inventario |
| **Identificador** | UC-002 |
| **Actores** | Administrador del Sistema |
| **Prioridad** | Alta |
| **Precondiciones** | El sistema debe estar en funcionamiento |
| **Descripción** | El administrador del sistema debe poder gestionar el inventario de productos, incluyendo registro, modificación y eliminación de productos. |
| **Flujo Principal** | 1. Administrador selecciona "Gestionar Inventario"<br>2. Sistema muestra menú de opciones<br>3. Administrador selecciona "Registrar Producto"<br>4. Sistema muestra formulario<br>5. Administrador ingresa datos del producto<br>6. Sistema valida código único<br>7. Sistema guarda datos<br>8. Sistema muestra confirmación |
| **Flujos Alternativos** | **4.1 Código Duplicado**<br>1. Sistema detecta duplicado<br>2. Muestra error<br>3. Administrador ingresa nuevo código<br><br>**4.2 Stock Negativo**<br>1. Sistema detecta cantidad negativa<br>2. Muestra error<br>3. Administrador corrige cantidad<br><br>**4.3 Modificación**<br>1. Selección de producto<br>2. Muestra datos actuales<br>3. Modificación de datos<br>4. Actualización<br><br>**4.4 Eliminación**<br>1. Selección para eliminar<br>2. Confirmación<br>3. Eliminación |
| **Postcondiciones** | - Producto registrado/modificado/eliminado<br>- Lista de productos actualizada<br>- Reporte de stock bajo si aplica |
| **Requisitos Especiales** | - Código único<br>- Stock no negativo<br>- Precio mayor que cero<br>- Historial de cambios |
| **Extensiones** | - Búsqueda por criterios<br>- Ordenamiento por campos<br>- Alertas de stock bajo |
| **Notas** | - Campos obligatorios: código, nombre, precio, cantidad<br>- Registro de movimientos<br>- Sistema de respaldo | 