# Caso de Uso: Registro de Clientes (RF001)

## 1. Identificación
- **Nombre del Caso de Uso:** Registro de Clientes
- **Identificador:** UC-001
- **Actores:** Administrador del Sistema
- **Prioridad:** Alta
- **Precondiciones:** El sistema debe estar en funcionamiento

## 2. Descripción
El administrador del sistema debe poder registrar nuevos clientes en el sistema, ingresando sus datos personales y de contacto.

## 3. Flujo Principal
1. El administrador selecciona la opción "Registrar Cliente"
2. El sistema muestra el formulario de registro
3. El administrador ingresa los datos del cliente:
   - Nombre completo
   - Documento de identidad
   - Teléfono de contacto
   - Correo electrónico (opcional)
   - Dirección (opcional)
4. El sistema valida que el documento de identidad no exista
5. El sistema guarda los datos del cliente
6. El sistema muestra mensaje de confirmación

## 4. Flujos Alternativos
### 4.1 Documento de Identidad Duplicado
1. El sistema detecta que el documento ya existe
2. El sistema muestra mensaje de error
3. El administrador debe ingresar un documento diferente

### 4.2 Datos Inválidos
1. El sistema detecta datos inválidos
2. El sistema muestra mensaje de error indicando los campos incorrectos
3. El administrador corrige los datos

## 5. Postcondiciones
- El cliente queda registrado en el sistema
- El sistema actualiza la lista de clientes

## 6. Requisitos Especiales
- El documento de identidad debe ser único
- El sistema debe validar el formato del correo electrónico
- El sistema debe validar el formato del número telefónico

## 7. Extensiones
- El sistema permite editar los datos del cliente
- El sistema permite eliminar el registro del cliente
- El sistema permite consultar la lista de clientes

## 8. Notas y Problemas
- Los campos obligatorios son: nombre completo y documento de identidad
- El sistema debe mantener un historial de cambios en los datos del cliente 