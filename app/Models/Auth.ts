import { DateTime } from 'luxon'
import hash from 'Config/hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Auth extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (auth: Auth) {
    console.log(auth.password)
    if (auth.$dirty.password) {
      console.log(auth.$dirty.password)
      auth.password = await hash.default(auth.password)
      console.log(auth.password)
    }
  }
}
