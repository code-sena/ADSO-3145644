# ✅ Requerimientos Funcionales (RF)

## 🔹 RF1: Registrar personas en el sistema

**Descripción:**  
Se requiere que el sistema permita crear, modificar, inhabilitar y consultar los datos de una persona.

**Entradas de datos:**  
- Tipo de documento  
- Número de documento  
- Nombre  
- Correo electrónico  
- Dirección

**Flujo normal:**  
1. El empleado con credenciales habilitadas accede al módulo de personas.  
2. Elige la acción a realizar:  
   2.1. **Crear persona**  
   - Diligencia los datos básicos de la persona.  
   - Confirma y guarda el registro.  
   2.2. **Modificar persona**  
   - Consulta por número de documento o nombre.  
   - Ajusta los datos necesarios.  
   - Guarda los cambios.  
   2.3. **Inhabilitar persona**  
   - Consulta por número de documento.  
   - Inhabilita el registro.  
   2.4. **Consultar persona**  
   - Realiza filtrado por criterios como documento, nombre o estado.  
   - Visualiza los detalles del registro.

**Precondiciones:**  
- Si la persona no existe, el sistema debe permitir su creación.  
- Si la persona existe, debe permitir su modificación o inhabilitación.

**Poscondiciones:**  
- Si la persona ya existe, se notifica que el registro ya está creado.  
- Si no existe, se impide modificar o inhabilitar.  
- Si una acción se ejecuta exitosamente, se guarda el registro con marca de auditoría.

---

## 🔹 RF2: Registrar clientes de la tienda de Pepito Pérez

**Descripción:**  
El sistema debe permitir registrar, modificar, inhabilitar y consultar la información de los clientes de la tienda.

**Entradas de datos:**  
- Tipo de documento  
- Número de documento  
- Nombre del cliente  
- Teléfono  
- Correo electrónico  
- Dirección de entrega

**Flujo normal:**  
1. El usuario autorizado accede al módulo de clientes.  
2. Selecciona la acción a realizar:  
   2.1. **Registrar cliente**  
   - Diligencia los datos del cliente.  
   - Guarda el registro.  
   2.2. **Modificar cliente**  
   - Consulta al cliente por número de documento.  
   - Ajusta los datos requeridos.  
   - Guarda los cambios.  
   2.3. **Inhabilitar cliente**  
   - Consulta y marca al cliente como inactivo.  
   2.4. **Consultar cliente**  
   - Filtra por documento, nombre, teléfono o estado.  

**Precondiciones:**  
- El usuario debe estar autenticado y tener permisos sobre el módulo.  
- Si el cliente no existe, se permite su registro.  
- Si el cliente existe, se permite modificación o inactivación.

**Poscondiciones:**  
- El sistema registra cambios con fecha, hora y usuario responsable.  
- Se evita la duplicación mediante validación por documento.  
- Los clientes inactivos no pueden realizar compras.

---

## 🔹 RF3: Registrar empleados de la tienda de Pepito Pérez

**Descripción:**  
El sistema debe permitir registrar, modificar, inhabilitar y consultar la información del personal de la tienda.

**Entradas de datos:**  
- Tipo y número de documento  
- Nombre completo  
- Cargo o rol en la tienda  
- Fecha de ingreso  
- Correo institucional  
- Teléfono de contacto  

**Flujo normal:**  
1. El administrador accede al módulo de empleados.  
2. Realiza la acción deseada:  
   2.1. **Registrar empleado**  
   - Ingresa la información completa del nuevo empleado.  
   - Guarda el registro.  
   2.2. **Modificar empleado**  
   - Consulta al empleado por documento o nombre.  
   - Ajusta los datos.  
   - Guarda cambios.  
   2.3. **Inhabilitar empleado**  
   - Cambia el estado a "inactivo" por retiro, sanción u otra razón.  
   2.4. **Consultar empleado**  
   - Visualiza la información detallada del personal activo o inactivo.  

**Precondiciones:**  
- Solo el usuario administrador puede acceder a este módulo.  
- Validación obligatoria de la unicidad por número de documento.

**Poscondiciones:**  
- Registro actualizado con control de acceso y cambios.  
- Los empleados inactivos no pueden iniciar sesión ni realizar acciones en el sistema.
