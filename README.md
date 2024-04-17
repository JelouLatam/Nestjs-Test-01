
# Task API
This is a technical test for JelouLatam. It is a CRUD application using the NestJS framework along with Docker and Docker Compose for deployment.
## Documentation 
### Create a Task 
- Method: `POST` 
- Endpoint: `/tasks`
- Description: Creates a new task with the information in the body
#### Example
Request body: 
```
{
  "title": "Buy milk",
  "description": "Buy milk from the store",
  "status": "pending"
}
```
Response: 
```
{
  "title": "Buy milk",
  "description": "Buy milk from the store",
  "status": "pending",
  "id": 2
}
```

### Retrieves all tasks
- Method: `GET` 
- Endpoint: `/tasks`
- Description: Gets all tasks
#### Example
Response: 
```
[
  {
    "title": "Buy milk",
    "description": "Buy milk from the store",
    "status": "pending"
  }
]
```

### Retrieves a task by ID
- Method: `GET` 
- Endpoint: `/tasks/{id}`
- Description: Get task by id
#### Example
Response: 
```
{
  "title": "Buy milk",
  "description": "Buy milk from the store",
  "status": "pending"
}
```

### Updates a task by ID
- Method: `PUT` 
- Endpoint: `/tasks/{id}`
- Description: Update a task by id
#### Example
Request body:
```
{
  "title": "Buy eggs",
  "description": "Buy eggs from the local store",
  "status": "completed"
}
```
Response: 
```
{
  "title": "Buy eggs",
  "description": "Buy eggs from the local store",
  "status": "completed"
}
```

### Deletes a task by ID
- Method: `DELETE` 
- Endpoint: `/tasks/{id}`
- Description: Delete a task by id
#### Example
Response: 
```
{
  "status": 200,
  "message": "Task deleted"
}
```
For more detailed documentation, visit SwaggerUI at `localhost:3000/api`

## Running the Application with Docker Compose

To launch the application using Docker Compose, follow these steps to ensure a smooth startup:

### 1. Prerequisites:
- Ensure Docker and Docker Compose are installed on your system. If you need to install these, visit the official Docker website for installation guides tailored to your operating system.

### 2. Environment Config
- Before running the application, you must create a .env file in the root directory of your project. This file should contain the necessary environment variables required by the application and Docker. Here’s an example of what your .env file should look like:
```
DB_USER=my_user # this can be whatever you want
DB_PASSWORD=my_password
```

### 3. Running the App
- Open a terminal or command prompt in your project directory where the docker-compose.yml file is located.
```
docker compose up --build
```