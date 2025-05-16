# Caso de Uso: Registro de Clientes (RF001)

| Elemento | Descripción |
|----------|-------------|
| **Nombre del Caso de Uso** | Registro de Clientes |
| **Identificador** | UC-001 |
| **Actores** | Administrador del Sistema |
| **Prioridad** | Alta |
| **Precondiciones** | El sistema debe estar en funcionamiento |
| **Descripción** | El administrador del sistema debe poder registrar nuevos clientes en el sistema, ingresando sus datos personales y de contacto. |
| **Flujo Principal** | 1. El administrador selecciona "Registrar Cliente"<br>2. El sistema muestra el formulario<br>3. El administrador ingresa los datos del cliente<br>4. El sistema valida el documento<br>5. El sistema guarda los datos<br>6. El sistema muestra confirmación |
| **Flujos Alternativos** | **4.1 Documento Duplicado**<br>1. Sistema detecta duplicado<br>2. Muestra error<br>3. Administrador ingresa nuevo documento<br><br>**4.2 Datos Inválidos**<br>1. Sistema detecta datos inválidos<br>2. Muestra error<br>3. Administrador corrige datos |
| **Postcondiciones** | - Cliente registrado en el sistema<br>- Lista de clientes actualizada |
| **Requisitos Especiales** | - Documento de identidad único<br>- Validación de formato de correo<br>- Validación de formato de teléfono |
| **Extensiones** | - Edición de datos<br>- Eliminación de registro<br>- Consulta de lista de clientes |
| **Notas** | - Campos obligatorios: nombre y documento<br>- Mantener historial de cambios | 