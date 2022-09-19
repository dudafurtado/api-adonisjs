import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index ({ response }: HttpContextContract) {
    try {
      
      return response.status(200).json()
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async store ({ request, response }: HttpContextContract) {
    try {
      
      return response.status(200).json()
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async show ({ response, params }: HttpContextContract) {
    try {
      
      return response.status(200).json()
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async update ({ request, response, params }: HttpContextContract) {
    try {
      
      return response.status(200).json()
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async delete ({ response, params }: HttpContextContract) {
    try {
      
      return response.status(200).json()
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }
}
