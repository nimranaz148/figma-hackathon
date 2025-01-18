import { type SchemaTypeDefinition } from 'sanity'

import payment from './payment'
import cart from './cart'
import user from './user'
import shipment from './shipment'
import { productSchema } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,
    payment,
    cart,
    user,
    shipment
],
}
