# API with AdonisJS
# Let's create a CRUD of user and post to exercise

Inspired by: 
https://github.com/sinonsrt/crud-node-adonisjs
https://github.com/harizinside/AdonisJS-CRUD-API
https://github.com/RafaLopesMelo/CRUD-AdonisJS-Preview-5
https://www.section.io/engineering-education/build-a-restful-api-with-adonisjs/

1. Controller - make
CRUD) GET = index, POST = store, GET = show, PUT/PATCH = update, DELETE = destroy

2. AdonisJS Lucid - install and configure + install the client connection
.env) change the variables USER, PASSWORD, DB_NAME 

3. Migration - make
table .increments(), .string(), .varchar(60), .integer()

4. Model - make
@column()
public name: string

5. Validator - make
name.string()

6. Routes
/user
/user/:id
/post
/post/:id

`npm run build`
`npm run dev`