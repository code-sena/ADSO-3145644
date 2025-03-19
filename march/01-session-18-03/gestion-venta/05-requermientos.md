# Requerimientos Funcionales y No Funcionales

## Requerimientos Funcionales

### 1. Registro de Ventas
- **Nombre:** Registro de Ventas
- **Descripción:** Permitir a los usuarios registrar las ventas realizadas en la tienda de manera diaria, semanal, mensual u ocasional.
- **Flujo Normal:**
  1. Usuario accede al sistema.
  2. Usuario selecciona la opción de registrar venta.
  3. Usuario ingresa los datos de la venta (producto, cantidad, precio, fecha, etc.).
  4. Usuario confirma la transacción.
  5. El sistema almacena la información y genera un identificador de venta.
- **Precondición:** El usuario debe estar autenticado en el sistema.
- **Poscondición:** La venta queda registrada en la base de datos y disponible para reportes futuros.

### 2. Generación de Reportes de Ventas
- **Nombre:** Generación de Reportes
- **Descripción:** Crear reportes detallados de ventas diarias, semanales y mensuales para análisis de desempeño.
- **Flujo Normal:**
  1. Usuario accede al sistema.
  2. Usuario selecciona el tipo de reporte a generar.
  3. Usuario elige el periodo de tiempo.
  4. El sistema genera el reporte y lo presenta en pantalla.
  5. Usuario puede exportar o imprimir el reporte.
- **Precondición:** Debe haber ventas registradas en el sistema.
- **Poscondición:** El usuario obtiene el reporte en formato visual o descargable.

### 3. Consulta del Historial de Ventas
- **Nombre:** Historial de Ventas
- **Descripción:** Permitir a los usuarios consultar registros de ventas anteriores para toma de decisiones.
- **Flujo Normal:**
  1. Usuario accede al sistema.
  2. Usuario selecciona "Historial de Ventas".
  3. Usuario filtra los resultados por fecha o producto.
  4. El sistema muestra los resultados en pantalla.
- **Precondición:** Debe haber ventas registradas en el sistema.
- **Poscondición:** Usuario obtiene la información histórica de las ventas.

### 4. Notificaciones sobre Inventario Bajo
- **Nombre:** Alertas de Inventario
- **Descripción:** Generar alertas automáticas cuando un producto está por agotarse.
- **Flujo Normal:**
  1. Usuario ingresa nuevos productos o ventas en el sistema.
  2. El sistema verifica los niveles de inventario.
  3. Si un producto está por debajo del límite mínimo, se genera una alerta.
  4. Usuario recibe la notificación en el sistema o vía correo electrónico.
- **Precondición:** Inventario previamente registrado en el sistema.
- **Poscondición:** Usuario recibe la alerta y puede tomar acciones preventivas.

### 5. Administración de Usuarios
- **Nombre:** Gestor de Usuarios
- **Descripción:** Permitir la creación y gestión de usuarios con diferentes niveles de acceso.
- **Flujo Normal:**
  1. Administrador accede al sistema.
  2. Selecciona "Gestor de Usuarios".
  3. Agrega, edita o elimina usuarios.
  4. Asigna roles (Administrador, Vendedor, Consultor).
  5. Guarda los cambios.
- **Precondición:** Solo los administradores pueden gestionar usuarios.
- **Poscondición:** Los usuarios tienen permisos acorde a su rol.

## Requerimientos No Funcionales

### 1. Seguridad de Datos
- **Descripción:** Proteger la información contra accesos no autorizados mediante autenticación y encriptación.
- **Precondición:** Implementación de protocolos de seguridad.
- **Poscondición:** Datos almacenados de forma segura y accesibles solo para usuarios autorizados.

### 2. Interfaz Amigable
- **Descripción:** Diseñar una interfaz intuitiva, accesible y fácil de usar para mejorar la experiencia del usuario.
- **Precondición:** Evaluaciones de usabilidad.
- **Poscondición:** Usuarios pueden navegar y operar el sistema sin dificultad.

### 3. Disponibilidad
- **Descripción:** El sistema debe estar disponible 24/7 sin caídas prolongadas.
- **Precondición:** Implementación de servidores escalables y sistemas de respaldo.
- **Poscondición:** Usuarios pueden acceder al sistema en cualquier momento.

### 4. Escalabilidad
- **Descripción:** El sistema debe poder soportar un aumento en la cantidad de usuarios y datos sin afectar el rendimiento.
- **Precondición:** Arquitectura basada en microservicios o infraestructura escalable.
- **Poscondición:** El sistema sigue funcionando de manera eficiente a medida que crece la cantidad de usuarios.

### 5. Compatibilidad Multidispositivo
- **Descripción:** El sistema debe ser accesible desde computadoras, tabletas y teléfonos móviles.
- **Precondición:** Diseño responsivo y pruebas en diferentes dispositivos.
- **Poscondición:** Usuarios pueden acceder al sistema desde cualquier dispositivo sin problemas.
