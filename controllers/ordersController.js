import ordersService from "../services/ordersService.js";

export const createOrder = async (req, res, next) => {
  try {
    const newOrder = await ordersService.createOrder(req.body);
    res.status(201).send(newOrder);
  } catch (e) {
    next(e);
  }
};
