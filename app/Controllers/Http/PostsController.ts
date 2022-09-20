import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import InsertPostValidator from 'App/Validators/InsertPostValidator'

export default class PostsController {
  public async index ({ response }: HttpContextContract) {
    try {
      const posts = await Post.all()
      return response.status(200).json(posts)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async store ({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(InsertPostValidator)

      let post = new Post()
      post.title = payload.title
      post.description = payload.description
      post.likes = payload.likes

      await post.save()
      return response.status(200).json('A post was made successfully')
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async show ({ response, params }: HttpContextContract) {
    const { id } = params
    try {
      const post = Post.findOrFail(id)
      return response.status(200).json(post)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async update ({ request, response, params }: HttpContextContract) {
    const { id } = params
    try {
      const oldPost = await Post.findOrFail(id)
      const payload = await request.validate(InsertPostValidator)

      oldPost.merge(payload)

      return response.status(200).json('Post updated successfully')
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async destroy ({ response, params }: HttpContextContract) {
    const { id } = params
    try {
      const post = Post.findOrFail(id)
      return response.status(200).json(post)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }
}
