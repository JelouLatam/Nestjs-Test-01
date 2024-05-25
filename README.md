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



## Instrucciones para ejecutar el proyecto

Para ejecutar el proyecto, en primer lugar hay que instalar las dependencias de node con el siguiente comando:

npm install

PD: Se debe utilizar la version de node 20.13.1

El proyecto se puede ejecutar de estas maneras:

1. Utilizar el comando npm run start:prod

2. Ejecutando el Dockerfile con el comando docker run -p 3000:3000 my-nestjs-app

3. Ejecutando el docker-compose.yml con el comando docker-compose up --build

Utilizando cualquiera de estas 3 opciones, la API se ejecuta en el puerto 3000


## Que se desarrolló?

- Controlador para gestionar las operaciones CRUD de las tareas para las Listas y Tareas.

src/list/list.controller.ts
src/task/task.controller.ts

- Un servicio que maneje la lógica de negocio relacionada con las Listas y Tareas.

src/task/task.service.ts
src/list/list.service.ts

- Validaciones para los datos de entrada en las solicitudes en los controladores de listas y tareas.

src/task/dto/createUpdateTaskDTO.ts
src/list/dto/createUpdateListDTO.ts

- Middleware para registro de solicitudes.

src/app.middleware.ts

- Documentación API utilizando el módulo Swagger.
src/main.ts


## Cómo probar la API?

**Controladores Task:**

1. get http://localhost:3000/tasks
GET ALL TASK
  Params: N/A
  Body: N/A

2. post http://localhost:3000/tasks

CREATE TASK
  Params: N/A
  Body: 
  {
    "title": "Task 4",
    "description": "Description 4",
    "listId": 2
  }
  
3. put http://localhost:3000/tasks/:id

  UPDATE TASK
  Params: :id = 5
  Body: 
  {
    "title": "Task 5 update",
    "description": "Description added",
    "isCompleted": false
  }

4. put http://localhost:3000/tasks/:id/complete
COMPLETE TASK
Params: :id = 5
  Body: N/A

5. delete http://localhost:3000/tasks/:id
delete TASK
Params: :id = 5
  Body: N/A


**Controladores LIST:**

1. get http://localhost:3000/lists
GET ALL LISTS
  Params: N/A
  Body: N/A

2. post http://localhost:3000/lists

CREATE LIST
  Params: N/A
  Body: 
  {
    "title": "Lista 3"
}
  
3. put http://localhost:3000/lists/:id

  UPDATE LIST
  Params: :id = 3
  Body: 
  {
    "title": "Lista 3 UPDATE"
}

4. delete http://localhost:3000/tasks/:id
DELETE LIST
Params: :id = 3
  Body: N/A