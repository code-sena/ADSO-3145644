# Sistema de Gestión de Actividades

## Requisitos No Funcionales

### 1. Servidor
- **Tipo**: Servidor Cloud (AWS EC2)
- **Especificaciones**:
  - CPU: 2 vCPUs
  - RAM: 4GB
  - Almacenamiento: 20GB SSD
  - Sistema Operativo: Ubuntu Server 22.04 LTS

### 2. Dominio
- **Registro**: GoDaddy o Namecheap
- **Tipo**: Dominio .com
- **SSL**: Certificado Let's Encrypt (gratuito)

### 3. Motor de Base de Datos
- **Tipo**: MySQL 8.0
- **Características**:
  - InnoDB como motor de almacenamiento
  - Replicación para alta disponibilidad
  - Backups automáticos diarios

### 4. Licencias
- **Frontend**:
  - Angular 18: Licencia MIT (gratuita)
  - Bootstrap 5: Licencia MIT (gratuita)
  - Node.js: Licencia MIT (gratuita)

- **Backend**:
  - Spring Boot: Licencia Apache 2.0 (gratuita)
  - OpenJDK 17: Licencia GPL v2 (gratuita)
  - MySQL: Licencia GPL (gratuita)

### 5. Tecnologías
- **Frontend**:
  - Angular 18
  - TypeScript
  - Bootstrap 5
  - RxJS

- **Backend**:
  - Java OpenJDK 17
  - Spring Boot 3.x
  - Spring Data JPA
  - Spring Security

## Plan de Costos

### Costos Mensuales

1. **Infraestructura Cloud (AWS)**:
   - EC2 t3.medium: $30-40/mes
   - RDS MySQL: $20-30/mes
   - S3 Storage: $5-10/mes
   - CloudFront: $5-10/mes

2. **Dominio y DNS**:
   - Registro de dominio: $1-2/mes
   - DNS Management: Incluido

3. **Monitoreo y Mantenimiento**:
   - CloudWatch: $5-10/mes
   - Backup Storage: $5-10/mes

4. **Desarrollo y Mantenimiento**:
   - Licencias de desarrollo: $0 (todas son gratuitas)
   - Herramientas de CI/CD: $0 (GitHub Actions)

### Costos Anuales

1. **Infraestructura**: $720-1,200/año
2. **Dominio**: $12-24/año
3. **Mantenimiento**: $120-240/año

### Total Estimado
- **Mensual**: $70-120
- **Anual**: $840-1,440

## Consideraciones Adicionales

1. **Escalabilidad**:
   - La arquitectura permite escalar horizontalmente
   - Auto-scaling configurado para manejar picos de carga

2. **Seguridad**:
   - HTTPS/TLS implementado
   - Autenticación JWT
   - Cifrado de datos en reposo
   - Backups automáticos

3. **Rendimiento**:
   - CDN para assets estáticos
   - Caché en múltiples niveles
   - Optimización de consultas SQL

4. **Mantenimiento**:
   - Actualizaciones automáticas de seguridad
   - Monitoreo 24/7
   - Backups diarios
   - Plan de recuperación ante desastres 