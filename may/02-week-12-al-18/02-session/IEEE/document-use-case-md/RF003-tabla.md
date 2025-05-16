# Caso de Uso: Registro de Facturación (RF003)

| Elemento | Descripción |
|----------|-------------|
| **Nombre del Caso de Uso** | Registro de Facturación |
| **Identificador** | UC-003 |
| **Actores** | Administrador del Sistema, Cliente |
| **Prioridad** | Alta |
| **Precondiciones** | - Sistema en funcionamiento<br>- Cliente registrado<br>- Producto en inventario |
| **Descripción** | El administrador del sistema debe poder generar facturas de venta, asociando un cliente con uno o más productos del inventario, calculando totales y actualizando el inventario. |
| **Flujo Principal** | 1. Administrador selecciona "Nueva Factura"<br>2. Sistema muestra formulario<br>3. Administrador selecciona cliente<br>4. Sistema valida cliente<br>5. Administrador agrega productos<br>6. Sistema calcula totales<br>7. Administrador confirma<br>8. Sistema genera número<br>9. Sistema actualiza inventario<br>10. Sistema muestra factura |
| **Flujos Alternativos** | **4.1 Cliente no Encontrado**<br>1. Sistema no encuentra cliente<br>2. Muestra error<br>3. Registro de cliente requerido<br><br>**4.2 Stock Insuficiente**<br>1. Sistema detecta stock insuficiente<br>2. Muestra error<br>3. Ajuste de cantidad requerido<br><br>**4.3 Cancelación**<br>1. Selección de cancelar<br>2. Confirmación<br>3. Descarte de cambios |
| **Postcondiciones** | - Factura generada con número único<br>- Inventario actualizado<br>- Venta registrada<br>- Comprobante generado |
| **Requisitos Especiales** | - Validación de stock<br>- Historial de facturas<br>- Impresión de factura<br>- Cálculo correcto de totales |
| **Extensiones** | - Aplicación de descuentos<br>- Múltiples métodos de pago<br>- Reportes de ventas<br>- Anulación de facturas |
| **Notas** | - Fecha automática<br>- Registro de operaciones<br>- Sistema de respaldo<br>- Validación de integridad | 