import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema, rules } from '@ioc:Adonis/Core/Validator'

// import Order from 'App/Models/Order'


export default class AuthController {

    public async checkout({ request, response }: HttpContextContract) {
        const validations = await schema.create({
            name: schema.string({}, [
                rules.required(),
            ]),
            email: schema.string({}, [
                rules.required(),
            ]),
            phone: schema.string({}, [
                rules.required(),
            ]),
            address: schema.string({}, [
                rules.required(),
            ]),
            zip: schema.string({}, [
                rules.required(),
            ]),
            place: schema.string({}, [
                rules.required(),
            ]),

        })
        const data: object = await request.validate({ schema: validations })


        try {
            // await Order.create(data)
            return response.ok(data)
        } catch (e) {
            return response.send(e)
        }
    }



    // public async checkout() {

    // serializer = OrderSerializer(data = request.data)

    // if serializer.is_valid():
    //     stripe.api_key = settings.STRIPE_SECRET_KEY
    // paid_amount = sum(item.get('quantity') * item.get('product').price for item in serializer.validated_data['items'])

    // try:
    // charge = stripe.Charge.create(
    //     amount = int(paid_amount * 100),
    //     currency = 'USD',
    //     description = 'Charge from Djackets',
    //     source = serializer.validated_data['stripe_token']
    // )

    // serializer.save(user = request.user, paid_amount = paid_amount)


    // }
}
