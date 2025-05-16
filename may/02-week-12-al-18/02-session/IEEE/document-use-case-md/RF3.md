# Caso de Uso: Registro de Facturación (RF003)

## 1. Identificación
- **Nombre del Caso de Uso:** Registro de Facturación
- **Identificador:** UC-003
- **Actores:** Administrador del Sistema, Cliente
- **Prioridad:** Alta
- **Precondiciones:** 
  - El sistema debe estar en funcionamiento
  - Debe existir al menos un cliente registrado
  - Debe existir al menos un producto en inventario

## 2. Descripción
El administrador del sistema debe poder generar facturas de venta, asociando un cliente con uno o más productos del inventario, calculando totales y actualizando el inventario.

## 3. Flujo Principal
1. El administrador selecciona la opción "Nueva Factura"
2. El sistema muestra el formulario de facturación
3. El administrador selecciona el cliente
4. El sistema valida que el cliente exista
5. El administrador agrega productos a la factura:
   - Selecciona el producto
   - Ingresa la cantidad
   - El sistema valida el stock disponible
6. El sistema calcula automáticamente los subtotales y total
7. El administrador confirma la factura
8. El sistema genera el número de factura
9. El sistema actualiza el inventario
10. El sistema muestra la factura generada

## 4. Flujos Alternativos
### 4.1 Cliente no Encontrado
1. El sistema no encuentra el cliente
2. El sistema muestra mensaje de error
3. El administrador debe registrar el cliente primero

### 4.2 Stock Insuficiente
1. El sistema detecta stock insuficiente
2. El sistema muestra mensaje de error
3. El administrador debe ajustar la cantidad

### 4.3 Cancelación de Factura
1. El administrador selecciona cancelar
2. El sistema solicita confirmación
3. El administrador confirma la cancelación
4. El sistema descarta los cambios

## 5. Postcondiciones
- Se genera la factura con número único
- Se actualiza el inventario de productos
- Se registra la venta en el sistema
- Se genera el comprobante de venta

## 6. Requisitos Especiales
- El sistema debe validar el stock antes de confirmar la venta
- El sistema debe mantener un historial de facturas
- El sistema debe permitir la impresión de la factura
- El sistema debe calcular correctamente los totales

## 7. Extensiones
- El sistema permite aplicar descuentos
- El sistema permite diferentes métodos de pago
- El sistema genera reportes de ventas
- El sistema permite anular facturas

## 8. Notas y Problemas
- La fecha de la factura es automática
- El sistema debe mantener un registro de todas las operaciones
- Se debe implementar un sistema de respaldo para las facturas
- El sistema debe validar la integridad de los datos en cada paso 