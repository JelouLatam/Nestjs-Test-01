# Backend_Developer_Test_NestJS

¡Bienvenido(a) a la prueba técnica para el puesto de Desarrollador Backend con NestJS! En esta prueba, evaluaremos tus habilidades en el desarrollo de aplicaciones utilizando NestJS, con un enfoque específico en diversos aspectos técnicos y de buenas prácticas.

## Descripción del proyecto

El objetivo de este proyecto es desarrollar una API simple para gestionar una lista de tareas (to-do list) utilizando NestJS.

## Requisitos técnicos

La aplicación debe ser desarrollada utilizando las siguientes tecnologías:

- Framework: NestJS.
- Lenguaje de programación: TypeScript.
- Base de datos: Puedes utilizar cualquier base de datos de tu elección. (por ejemplo, SQLite)
- Docker (Opcional).

El proyecto debe incluir:

- Un controlador para gestionar las operaciones CRUD de las tareas.
- Un servicio que maneje la lógica de negocio relacionada con las tareas.
- Validaciones para los datos de entrada en las solicitudes.
- Middleware para registro de solicitudes.
- Documentación API utilizando el módulo Swagger.

### Puntos adicionales:

- Dockerización:
  - Proporciona un archivo `Dockerfile` para construir la imagen de Docker de la aplicación NestJS.
  - Proporciona un archivo `docker-compose.yml` para el despliegue local del microservicio.

## Aspectos a evaluar

Durante la revisión de tu proyecto, nos enfocaremos en los siguientes aspectos:

1. **Correcto funcionamiento:** Verificaremos que la aplicación cumpla con los requisitos y funcione correctamente.
2. **Eficiencia:** Evaluaremos la eficiencia del código, incluido el rendimiento y el manejo de recursos.
3. **Lectura de código:** Revisaremos la legibilidad del código, la claridad en la estructura y la coherencia en las convenciones de nomenclatura.
4. **Formateo y estilo del código:** Verificaremos el uso de herramientas como linter para mantener un código consistente y prettier para el formateo del mismo.
5. **Organización del proyecto:** Evaluar la estructura y organización del código fuente.

## Tareas a realizar

1. Implementa el microservicio de gestión de tareas con las funcionalidades descritas anteriormente.
2. **Opcional:** Crea un archivo `Dockerfile` para construir la imagen de Docker de la aplicación.
3. **Opcional:** Crea un archivo `docker-compose.yml` para el despliegue local del microservicio.
4. Realiza una revisión del código para evaluar la calidad de la lectura del mismo.
5. Utiliza un linter y prettier para garantizar la calidad y estilo del código.
6. Verifica el correcto funcionamiento de la aplicación.

## Entrega de la prueba

- El código fuente debe ser entregado mediante un pull request hacia la rama master de este repositorio.
- El nombre de la rama debe seguir la siguiente convención `test/nombre-persona`
- Agrega al final del archivo README.md instrucciones claras sobre cómo ejecutar y probar la aplicación.
  - Además de la documentación necesaria para probar el API con ejemplos de request.

¡Buena suerte y estamos ansiosos por revisar tu trabajo!

### Instrucciones de ejecución y pruebas de la aplicación

## Ejecución de la aplicación

Primero, en la raíz del proyecto deberá crear el archivo .env y agregar en este lo siguiente:

- DATABASE_HOST='sqlite'
- DATABASE_URI='db/Tasks.db'

Puede elegir entre desplegarla normalmente o desplegarla con Docker.

- **Despliegue normal**: Una vez clonado el proyecto, ejecutar el comando `npm install` para instalar las dependencias. Luego de ello correr `npm run start` para iniciar la aplicación.

- **Despliegue local con Docker**: Una vez clonado el proyecto, ejecutar el comando `docker compose up -d` para hacer la build de la imagen de Docker usando el Dockerfile previsto en el proyecyo e iniciar la aplicación en un contenedor.

Ya habiendo iniciado la aplicación puede consultar la documentación de la API en la siguiente URL: `http://localhost:3000/api`.

## Pruebas de la aplicación

Puede probar la aplicación utilizando los distintos endpoints y requests, asumiento que ha lanzado la aplicación localmente, ya sea por despliegue normal o por Docker.

- **GET all tasks**
  - Método: GET
  - Endpoint: `http://localhost:3000/tasks`
  - Respuesta esperada: Debería esperearse la lista de tareas en la base de datos en formato json.
  
- **GET a task by id**
  - Método: GET
  - Endpoint: `http://localhost:3000/tasks/:id`, example: `http://localhost:3000/tasks/10`
  - Respuesta esperada: Si la tarea existe, retornará la tarea encontrada en la base de datos. En caso contrario botará error 404.

- **Create a new task**
  - Método: POST
  - Endpoint: `http://localhost:3000/tasks`
  - Request body:
  {
    "title": "Wash Dishes",
    "description": "Use different sponges for glasses and dishes in general.",
    "dueDate": "2024-01-26"
  }
  - Respuesta esperada: Se crea la tarea en la base de datos y la aplicación responde con la tarea recién agregada.
  - Notas: Los campos no pueden estar vacíos o retornará error de Bad Request. El campo de dueDate debe estar en formato yyyy-mm-dd, y la fecha no puede ser igual o anterior a la fecha actual.

- **Update a task**
  - Método: PATCH
  - Endpoint: `http://localhost:3000/tasks/:id`, example `http://localhost:3000/tasks/12`
  - Request body:
  {
    "title": "Do something awesome",
    "description": "Find something awesome to do and JUST DO IT!",
    "dueDate": "2024-01-30"
  }
  - Respuesta esperada: Se actualizará la tarea en la base de datos y la aplicación responde con la tarea recién actualizada si es que la tarea con dicho id existe. Caso contrario retornará 404.
  - Notas: Los campos no pueden estar vacíos o retornará error de Bad Request. El campo de dueDate debe estar en formato yyyy-mm-dd, y la fecha no puede ser igual o anterior a la fecha actual.

- **Delete a task**
  - Método: DELETE
  - Endpoint: `http://localhost:3000/tasks/:id`, example `http://localhost:3000/tasks/12`
  - Respuesta esperada: Si la tarea existe, se eliminará de la base de datos y retornará la tarea eliminada. En caso que no exista, retornará 404.