# Caso de Uso - RF01: Recibir autorización para retirar dinero

| Campo                    | Descripción                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Título del Caso de Uso** | RF01: Recibir autorización para retirar dinero                              |
| **Descripción**          | El sistema debe validar que el cliente tenga autorización para retirar dinero. |
| **Actor Principal**      | Cliente                                                                     |
| **Actores Secundarios**  | Ninguno                                                                     |
| **Flujo Normal**         | 1. El cliente solicita retirar dinero. <br> 2. El sistema solicita la contraseña. <br> 3. El cliente la ingresa. <br> 4. El sistema valida y autoriza la operación. |
| **Flujos Alternativos / Excepciones** | E1: Si la contraseña es incorrecta, el sistema niega la autorización.        |
| **Datos de Entrada**     | - Número de cuenta <br> - Contraseña                                        |
| **Datos de Salida**      | - Confirmación de autorización o denegación                                 |
| **Precondiciones**       | - El cliente debe estar registrado <br> - El cajero automático debe estar en línea |
| **Poscondiciones**       | - La autorización es registrada <br> - El flujo continúa con retiro de dinero |
| **Restricciones**        | - Máximo 3 intentos de contraseña <br> - Cumplimiento de normas de seguridad bancaria |
| **Dependencias**         | - Depende del RF02: Ingresar contraseña                                     |