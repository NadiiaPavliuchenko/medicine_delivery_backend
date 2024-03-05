import { orders } from "../models/ordersModel.js";

const createOrder = async ({
  name,
  email,
  phone,
  address,
  price,
  products,
}) => {
  const newOrder = await orders.create({
    name,
    email,
    phone,
    address,
    price,
    products,
  });
  if (!newOrder) {
    return null;
  } else {
    return newOrder;
  }
};

export default { createOrder };
