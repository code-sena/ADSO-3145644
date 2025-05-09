# Caso de Uso - RF02: Ingresar contraseña

| Campo                    | Descripción                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Título del Caso de Uso** | RF02: Ingresar contraseña                                                    |
| **Descripción**          | El cliente debe ingresar su contraseña para verificar su identidad.         |
| **Actor Principal**      | Cliente                                                                     |
| **Actores Secundarios**  | Ninguno                                                                     |
| **Flujo Normal**         | 1. El sistema solicita la contraseña. <br> 2. El cliente la ingresa. <br> 3. El sistema la valida. |
| **Flujos Alternativos / Excepciones** | E1: Si la contraseña es incorrecta, se solicita de nuevo. <br> E2: Si se exceden los intentos, se bloquea la sesión. |
| **Datos de Entrada**     | - Contraseña del cliente                                                     |
| **Datos de Salida**      | - Resultado de la validación (válida o no válida)                           |
| **Precondiciones**       | - El cliente debe haber iniciado una operación que requiera autenticación   |
| **Poscondiciones**       | - La contraseña es validada o el acceso es bloqueado                        |
| **Restricciones**        | - Máximo 3 intentos permitidos                                              |
| **Dependencias**         | - Utilizado por RF01: Recibir autorización para retirar dinero              |