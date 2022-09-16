# ToDo-backend

## About the app:

This app is a CRUD (create, read, update and delete) ToDo API using NodeJS and storage in local MySQL.

## Technologies and Packages:

- NodeJS
- Express (run server)
- Nodemon (monitor for any change in project and restart server automatically)
- Mysql2 (connect to local MySQL)
- Sequelize (ORM tool for MySQL)
- Dotenv (environment variables)
- Swagger (documentation) **_Working to implement_**
- Winston (logger) **_Working to implement_**

## How to install:

```
1 - npm install
2 - Install MySQL in your computer
3 - Create a new file called ".env" and set your DB_PASSWORD
4 - npm start
5 - Open the Postman/Insomia at http://localhost:5000/
6 - Create a requests following below in you favorite software

```

## Requests:

##### CREATE A NEW TODO

**URL:** **http://localhost:5000/todos**
**Method:** **POST**

```
{
	"name": "My first ToDo",
	"description":"It is my First ToDo"
}
```

##### GET ALL TODO

**URL:** **http://localhost:5000/todos**
**Method:** **GET**

```
No body
```

##### GET TODO BY ID

**URL:** **http://localhost:5000/todos/1**
**Method:** **GET**

```
No body
```

##### UPDATE A TODO

**URL:** **http://localhost:5000/todos/1**
**Method:** **PUT**

```
{
	"name": "First update",
	"description":"It is my first update"
}
```

##### DELETE A TODO

**URL:** **http://localhost:5000/todos/1**
**Method:** **DELETE**

```
No body
```

## Created by:

Renato Beraldo Nunes (me)
