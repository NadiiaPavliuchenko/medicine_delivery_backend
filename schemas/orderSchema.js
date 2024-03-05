import Joi from "joi";
import objectId from "joi-objectid";

Joi.objectId = objectId(Joi);

export const createOrderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.objectId().required(),
        quantity: Joi.number().required(),
      })
    )
    .has(
      Joi.object({
        productId: Joi.objectId().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
});
