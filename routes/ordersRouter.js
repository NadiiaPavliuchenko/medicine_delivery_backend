import express from "express";
import { createOrder } from "../controllers/ordersController.js";
import validateBody from "../middlewares/validateBody.js";
import { createOrderSchema } from "../schemas/orderSchema.js";

const ordersRouter = express.Router();

ordersRouter.post("/", validateBody(createOrderSchema), createOrder);

export default ordersRouter;
