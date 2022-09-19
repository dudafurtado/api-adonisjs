import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { welcome: 'This is the API for users and posts. What about you take a look on the routes?' }
})


