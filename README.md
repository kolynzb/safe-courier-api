# Safe-Courier API (clear) 

## Table Of Contents

1. [Project Overview](#project-overview)
2. [Usage](#usage)
   1. [Pre-requisites](#pre-requisites)
3. [Contributors](#contributors)

<br>

Api documentation link 
https://safe-courier-clear.herokuapp.com/api-docs/#/

<br>

### Project Structure  
```bash
├───config
├───controllers
├───helpers
├───middleware
├───models
└───routes
```



## **Project Overview**

Safe-Courier-API is  backend courier service that helps users deliver parcels to different destinations. Safe Courier provides courier quotes based on weight categories.

## Environment Variables

- **PORT** -- `server port number`

- **DB_URL** -- `database URL`

- **SECRET** -- `Secret key for verifying the token`

- **NODE_ENV** -- `Specifies the Server environment (development, local, production)`

### **Usage**

- `clone` this repository.

- `cd` into project root directory.

- run `yarn ` to install all dependencies. (you must have [pre-requisites](#pre-requisites))

- Run `yarn dev` to start the server.

- Open up `Postman` and then test out the Endpoints.

## **Pre-requisites**

- [Node Js](https://nodejs.org/en/download/)
- [Mongo DB](https://www.mongodb.com/try/download/community)

## **User CRUD Operations**

## Create a User

Adds in a new single user into the Application.

| End Point             | Method | Params | Data Type |
| --------------------- | ------ | ------ | --------- |
| `/api/v1/auth/signup` | POST   | `none` | `application/json`    |

- **Request Body**

```json
{
  "name": "testuser",
  "email": "testemail@exampleuser.com",
  "password": "password"
}
```

- **Request Headers**

> None

- **Success Response:**

**Status: `200 OK`**

- **Sample Content:**

```json
{
  "Message": "User account succesfully created!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJpZCI6IjVmNTc2OTlmM2U4NjFjMDAxNzBhNTFhMSIsImlhdCI6MTU5OTU2NDE5MSwiZXhwIjoxNTk5NjUwNTkxfQ.
  Hkp5ruXBMYdJ4pYdQCIJbKfB5PU6hdss5lEXehtNGUc"
}
```

- **Error Response**

```json
{
  "status": 401,
  "message":" error.message "
}
```

# **Login User**

Logs in a single user into the Application

| End Point             | Method | Params | Data Type |
| --------------------- | ------ | ------ | --------- |
| `/api/v1/auth/login`  | POST   | `none` | `application/json`    |

- **Request Body**

```json
{
  "email": "test@example.com",
  "password": "password"
}
```

- **Response Body**

```json
{
  "name": "testname",
  "email":"testname@example.com"
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJ1c2VybmFtZSI6ImthbGx5IiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYwMDc4Mjc3MywiZXhwIjoxNjAwODY5MTczfQ
  .TfG4lq7AZtWU6ES332_boK6eGdiexPH7eb3IxhXVL2k"
}
```


- **Validation Error Response for Email Missing field**
```json
{
  "message": "\"email\" is required"
}
```
- **validation Error Response for Password Missing field**
```json
{
  "message": "\"password\" is required"
}
```

# Get Parcel order By ID

Returns a single parcel order by their Id

| End Point             | Method | Params | Data Type |
| --------------------- | ------ | ------ | --------- |
| `/api/v1/parcel/:id`    | GET    | `none` | `application/json`    |

- **Request Headers**

`{ Authorisation: Bearer Token}`

Returns Parcel order object


### **Contributors**

1. [Collins](https://github.com/kolynzb)
2. [Diphan](https://github.com/diphan-source)
3. [mildred](https://github.com/mildred-nakayuki)


### **Leading Facilitator**

[Tuhirirwe Maria](https://github.com/tuhirirwe-maria)

### License

[MIT](/LICENSE)
# safe-courier-api
