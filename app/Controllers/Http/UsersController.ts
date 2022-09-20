import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import InsertUserValidator from 'App/Validators/InsertUserValidator'

export default class UsersController {
  public async index ({ response }: HttpContextContract) {
    try {
      const user = await User.all()
      return response.status(200).json(user)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async store ({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(InsertUserValidator)
      await User.create(payload)
      return response.status(200).json('User stored on database')
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async show ({ response, params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      return response.status(200).json(user)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async update ({ request, response, params }: HttpContextContract) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)
      const userUpdated = user.merge(request.body())
      await user.save()

      return response.status(200).json(userUpdated)
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }

  public async destroy ({ response, params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
      return response.status(200).json('User destroyed')
    } catch (error) {
      return response.status(500).json(error.message)
    }
  }
}
