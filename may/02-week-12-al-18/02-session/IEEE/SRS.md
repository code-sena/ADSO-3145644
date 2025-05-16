# Especificación de Requisitos de Software (SRS)

## Información General
- **Nombre del Sistema:** Sistema de Gestión de Ventas para la Tienda de Pepito Pérez
- **Versión:** 1.0
- **Fecha:** 15 de mayo de 2025
- **Autor:** [Nombre del redactor, si se desea]
- **Formato:** IEEE 830

## 1. Introducción

### 1.1 Propósito del documento
El presente documento tiene como propósito especificar, de manera clara y precisa, los requerimientos funcionales del sistema de gestión de ventas para la tienda de Pepito Pérez. La aplicación busca automatizar los procesos de registro de clientes, gestión de inventario y facturación.

### 1.2 Alcance del sistema
La aplicación permitirá:
- Registrar y consultar datos de clientes
- Gestionar productos en inventario (altas, bajas y actualizaciones)
- Generar facturación de ventas con detalle de productos y valores

## 2. Requerimientos funcionales

### 2.1 RF001 – Registro de clientes

#### Descripción
El sistema debe permitir el registro de los clientes de la tienda, almacenando su información básica para su posterior identificación en procesos de venta y facturación.

#### Entradas
- Nombre completo
- Documento de identidad (obligatorio y único)
- Teléfono de contacto
- Correo electrónico (opcional)
- Dirección (opcional)

#### Salidas
- Confirmación del registro exitoso
- Mensajes de error si el cliente ya existe o los datos son inválidos

#### Comportamiento del sistema
- Validará que el documento de identidad no se repita
- Permitirá editar o eliminar registros existentes
- Listará los clientes registrados en una interfaz amigable

### 2.2 RF002 – Registro de inventario

#### Descripción
El sistema debe permitir registrar, consultar, modificar y eliminar productos del inventario de la tienda.

#### Entradas
- Código único del producto
- Nombre del producto
- Descripción
- Categoría (opcional)
- Precio unitario
- Cantidad en stock

#### Salidas
- Mensajes de confirmación tras operaciones exitosas
- Reportes de productos con bajo inventario
- Listado de productos ordenados por nombre, stock o categoría

#### Comportamiento del sistema
- Verificará la unicidad del código de producto
- Controlará que el stock nunca sea negativo
- Permitirá la búsqueda por filtros

### 2.3 RF003 – Registro de facturación

#### Descripción
El sistema debe permitir generar facturas de venta, asociando un cliente con uno o más productos del inventario, reflejando cantidades, precios y totales.

#### Entradas
- Identificación del cliente
- Selección de productos con cantidades
- Fecha de la venta (por defecto, la actual)

#### Salidas
- Número único de factura
- Detalle de la factura en pantalla e impresión
- Actualización automática del inventario

#### Comportamiento del sistema
- Calculará el total de la venta sumando los productos seleccionados
- Verificará disponibilidad en stock antes de confirmar la venta
- Reducirá automáticamente el inventario según la cantidad vendida 