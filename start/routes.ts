import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { welcome: 'This is the API for users and posts. What about you take a look on the routes?' }
})

Route.resource('/user', 'UsersController').apiOnly()

Route.get('/post', 'PostsController.index')
Route.post('/post', 'PostsController.store')
Route.get('/post/:id', 'PostsController.show')
Route.patch('/post/:id', 'PostsController.update')
Route.delete('/post/:id', 'PostsController.destroy')