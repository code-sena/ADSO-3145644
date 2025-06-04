# Mockups - Control de Tareas

A continuación se presentan los mockups de las principales vistas de la aplicación, alineados con los requerimientos funcionales definidos en `RF.md`.

---

## 1. Vista: Gestión de Clientes

```
+------------------------------------------------------+
|                Registro de Cliente                   |
+------------------------------------------------------+
| Tipo de Documento: [__________]                      |
| Nombre:            [__________]                      |
| Apellidos:         [__________]                      |
| Edad:              [__]                              |
| Correo electrónico:[__________]                      |
| Usuario:           [auto-generado]                   |
| Contraseña:        [auto-generado]                   |
+------------------------------------------------------+
| [Guardar] [Cancelar]                                 |
+------------------------------------------------------+
| Lista de Clientes                                    |
|------------------------------------------------------|
| Documento | Nombre | Apellidos | Correo | Acciones    |
|------------------------------------------------------|
| ...       | ...    | ...       | ...    | [Editar][X] |
+------------------------------------------------------+
```

---

## 2. Vista: Gestión de Categorías

```
+-----------------------------------------------+
|           Registro de Categoría               |
+-----------------------------------------------+
| Código:        [__________]                   |
| Nombre:        [__________]                   |
| Descripción:   [__________________________]   |
| Estado:        [ Activa | Inactiva ]          |
+-----------------------------------------------+
| [Guardar] [Cancelar]                          |
+-----------------------------------------------+
| Lista de Categorías                           |
|-----------------------------------------------|
| Código | Nombre | Estado | Acciones           |
|-----------------------------------------------|
| ...    | ...    | ...    | [Editar][X]        |
+-----------------------------------------------+
```

---

## 3. Vista: Gestión de Tareas

```
+-------------------------------------------------------------+
|                        Registro de Tarea                    |
+-------------------------------------------------------------+
| Código:        [__________]                                 |
| Nombre:        [__________]                                 |
| Descripción:   [______________________________]             |
| Estado:        [ Agendada | Cumplida | Cancelada ]          |
| Fecha Inicio:  [__/__/____]                                 |
| Fecha Fin:     [__/__/____]                                 |
| Categoría:     [__________] (desplegable)                   |
+-------------------------------------------------------------+
| [Guardar] [Cancelar]                                        |
+-------------------------------------------------------------+
| Lista de Tareas                                             |
|-------------------------------------------------------------|
| Código | Nombre | Estado | Categoría | F. Inicio | F. Fin |  |
|-------------------------------------------------------------|
| ...    | ...    | ...    | ...       | ...       | ...    |  |
+-------------------------------------------------------------+
```

---

## 4. Vista: Lista de Tareas por Usuario

```
+-------------------------------------------------------------+
|                  Mis Tareas                                 |
+-------------------------------------------------------------+
| Usuario: [__________]                                       |
+-------------------------------------------------------------+
| Código | Nombre | Estado     | Categoría | F. Inicio | F. Fin |
|-------------------------------------------------------------|
| 001    | Tarea1 | Agendada   | Trabajo   | 01/06/25  | 02/06/25|
| 002    | Tarea2 | Cumplida   | Personal  | 28/05/25  | 28/05/25|
| 003    | Tarea3 | Cancelada  | Estudio   | 27/05/25  | 27/05/25|
+-------------------------------------------------------------+
```

---

> Estos mockups son representaciones visuales de las pantallas principales y pueden ser refinados durante el desarrollo.
