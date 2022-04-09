import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema, rules } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'


export default class AuthController {

    public async register({ request, response }: HttpContextContract) {
        const validations = await schema.create({
            email: schema.string({}, [
                rules.required(),
                rules.email(),
                rules.unique({ table: 'users', column: 'email' })

            ]),
            password: schema.string({}, [
                rules.required()
            ])
        })
        const data = await request.validate({ schema: validations })
        try {
            await User.create(data)
            return response.ok(data)
        } catch (e) {
            return response.send(e)
        }
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        try {
            const data = await auth.attempt(email, password)
            const isAuth = auth.isLoggedIn

            // const meId: any = auth.user?.id ?? null
            // const me2 = User.find(meId ?? 1);
            // const me = User.query().where('id', meId).first()

            // const user = User.query().where('id', userId).first()

            return response.send({ 'isAuth': isAuth, 'me': auth.user, 'token': data.token })
        } catch (e) {
            return response.badRequest(e)
        }
    }


    public async logout({ auth, response }: HttpContextContract): Promise<void> {




        return response.send(await auth.use('api').revoke())


    }

}
