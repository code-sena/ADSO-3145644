# Diagrama de Casos de Uso (UML)

Un **diagrama de casos de uso** es un tipo de diagrama del lenguaje UML (Unified Modeling Language) que representa las **funciones o servicios** que un sistema ofrece a los usuarios (actores), mostrando **cómo interactúan los usuarios con el sistema**.

## Características principales

- Representa el **comportamiento externo** del sistema desde la perspectiva del usuario.
- Identifica las **interacciones** entre los actores y el sistema.
- Es útil en fases tempranas del análisis de requerimientos.

## Elementos principales

### 1. Actor
- Representa a un usuario u otro sistema que interactúa con el sistema.
- Se dibuja como una figura de persona (monigote).

### 2. Caso de uso
- Representa una funcionalidad o tarea que el sistema ofrece.
- Se dibuja como una **elipse** con el nombre del caso de uso dentro.

### 3. Sistema
- Representado como un **rectángulo** que contiene los casos de uso.

### 4. Relaciones
- **Asociación**: Conecta un actor con un caso de uso.
- **Inclusión (`<<include>>`)**: Un caso de uso siempre incluye otro.
- **Extensión (`<<extend>>`)**: Un caso de uso puede extenderse condicionalmente con otro.
- **Generalización**: Herencia entre actores o entre casos de uso.

## Ejemplo: Cajero Automático

**Actores**: Cliente  
**Casos de uso**:
- Retirar dinero
- Consultar saldo
- Depositar dinero

**Relaciones**:  
El actor `Cliente` se conecta con cada uno de los casos de uso según la operación que desea realizar.

```plaintext
          +---------------------+
          |     Cajero ATM      |
          |  -----------------  |
          |  O Retirar dinero   |
          |  O Consultar saldo  |
          |  O Depositar dinero |
          +---------------------+
               ^      ^      ^
               |      |      |
            +-----------------+
            |     Cliente     |
            +-----------------+
