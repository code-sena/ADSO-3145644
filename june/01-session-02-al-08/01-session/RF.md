# Requerimientos Funcionales (RF) - Control de Tareas

## Introducción
Este documento describe los requerimientos funcionales para la aplicación de control de tareas, redactados bajo estándares de Scrum. Se incluyen los criterios de Definition of Ready (DoR), Definition of Done (DoD) y las tareas asociadas a cada Historia de Usuario (HU).

---

## HU01: Gestión de Clientes
**Como** usuario administrador,
**quiero** registrar y gestionar los datos básicos de los clientes (personas),
**para** poder identificarlos y asignarles tareas.

### Criterios de Aceptación
- Se debe capturar tipo de documento, nombre, apellidos, edad y correo electrónico.
- No se permiten registros duplicados.
- A cada usuario se le asigna un usuario y una contraseña.

### DoR (Definition of Ready)
- HU priorizada en el Product Backlog.
- Criterios de aceptación definidos y comprendidos.
- Diseño de la base de datos aprobado.
- Acceso a ambiente de desarrollo disponible.

### DoD (Definition of Done)
- Formulario de registro funcional y validado.
- Validación de duplicados implementada.
- Usuario y contraseña generados correctamente.
- Pruebas unitarias y de integración realizadas.
- Documentación actualizada.

### Tasks
- Diseñar el modelo de datos para clientes.
- Implementar formulario de registro.
- Validar datos y duplicados.
- Implementar lógica de generación de usuario y contraseña.
- Realizar pruebas y documentar.

---

## HU02: Gestión de Categorías
**Como** usuario administrador,
**quiero** registrar y gestionar categorías de tareas,
**para** agrupar y organizar las actividades de manera eficiente.

### Criterios de Aceptación
- Capturar código, nombre, descripción y estado de la categoría.
- No se permiten registros duplicados.
- Una categoría puede agrupar varias tareas.

### DoR
- HU priorizada y comprendida.
- Diseño de la base de datos para categorías aprobado.
- Acceso a ambiente de desarrollo disponible.

### DoD
- Formulario de registro de categorías funcional.
- Validación de duplicados implementada.
- Asociación de tareas a categorías habilitada.
- Pruebas realizadas y documentación actualizada.

### Tasks
- Diseñar el modelo de datos para categorías.
- Implementar formulario de registro de categorías.
- Validar datos y duplicados.
- Implementar asociación de tareas a categorías.
- Realizar pruebas y documentar.

---

## HU03: Gestión de Tareas
**Como** usuario,
**quiero** registrar y gestionar mis tareas diarias,
**para** llevar un control efectivo de mis actividades.

### Criterios de Aceptación
- Capturar código, nombre, descripción, estado, fecha de inicio y fin de la tarea.
- Cada tarea se asocia a una única categoría.

### DoR
- HU priorizada y comprendida.
- Diseño de la base de datos para tareas aprobado.
- Acceso a ambiente de desarrollo disponible.

### DoD
- Formulario de registro de tareas funcional.
- Asociación de tarea a categoría implementada.
- Pruebas realizadas y documentación actualizada.

### Tasks
- Diseñar el modelo de datos para tareas.
- Implementar formulario de registro de tareas.
- Validar datos y asociación a categoría.
- Realizar pruebas y documentar.

---

## HU04: Visualización de Tareas por Usuario
**Como** usuario,
**quiero** visualizar la lista de mis tareas y su estado (agendada, cumplida o cancelada),
**para** conocer el avance de mis actividades.

### Criterios de Aceptación
- Mostrar todas las tareas asociadas al usuario.
- Visualizar el estado de cada tarea.

### DoR
- HU priorizada y comprendida.
- Mockups de la vista de tareas disponibles.
- Acceso a ambiente de desarrollo disponible.

### DoD
- Vista de lista de tareas funcional.
- Estados de tareas correctamente visualizados.
- Pruebas realizadas y documentación actualizada.

### Tasks
- Implementar la vista de lista de tareas por usuario.
- Mostrar estados de las tareas.
- Realizar pruebas y documentar.

---

> Documento elaborado siguiendo buenas prácticas de Scrum para facilitar la gestión y desarrollo del proyecto.
