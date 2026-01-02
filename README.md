# API Empleados

Este proyecto es una API REST para la gestión de empleados.

## Estructura del proyecto

```
src/
   controllers/    # Controladores de rutas (lógica de entrada/salida)
   services/        # Lógica de negocio y acceso a datos
   routes/          # Definición de rutas
   validators/      # Validaciones de datos
   db.js            # Conexión a la base de datos
   config.js        # Configuración
   Error.js         # Manejo centralizado de errores
   app.js           # Configuración principal de la app
   index.js         # Punto de entrada
```

La lógica de negocio y acceso a datos está separada en la carpeta `services/` para facilitar el mantenimiento y escalabilidad.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno (ver sección correspondiente).
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Endpoints principales

- `GET /employees` - Lista todos los empleados
- `GET /employees/:id` - Obtiene un empleado por ID
- `POST /employees` - Crea un nuevo empleado
- `PATCH /employees/:id` - Actualiza parcialmente un empleado existente
- `DELETE /employees/:id` - Elimina un empleado

## Pruebas

Para ejecutar las pruebas:

```bash
npm test
```

## Docker

Puedes levantar el entorno con Docker Compose:

```bash
docker-compose up --build
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=nombre_db
```
